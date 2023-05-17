import React, { FormEvent, useContext, useEffect, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '../../components';

import { AuthContext } from '../../context'

import { apiHelper, updateToken } from '../../utils';

import styles from './styles.module.css';

function Login () {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [pageStatus, setPageStatus] = useState('init')
  const { setUserData } = useContext(AuthContext)
  const navigate = useNavigate();

  async function signIn () {
    try {
      const { email, password } = values;
      const response = await apiHelper.post('/auth/login', { email, password })
      const { accessToken } = response.body

      updateToken({ accessToken })
      setUserData({ email })
      navigate('/')
    } catch (error) {
      setPageStatus('error')
    }
  }

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  async function handleSubmit (e: FormEvent) {
    e.preventDefault()

    setPageStatus('loading')

    await signIn()

    setPageStatus('success')
  }

  useEffect(() => {
    return () => setPageStatus('success')
  }, [])

  return (
    <div className={styles.loginWrapper}>
      
      <form
        noValidate
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <h2 className={styles.heading}>
          Login
        </h2>
        <div className={styles.inputElement}>
          <label 
            htmlFor="email" 
          >
            Email
          </label>
          <Input
            value={values.email}
            placeholder="Enter your email ID"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className={styles.inputStyles}
          />
        </div>

        <div className={styles.inputElement}>
          <label htmlFor="password">Password</label>
          <Input
            value={values.password}
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className={styles.inputStyles}
          />
        </div>

        <Button
          type="submit"
          isFullWidth
          className={styles.buttonStyles}
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login;
