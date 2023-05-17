import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context'

import { apiHelper, updateToken } from '../../utils';

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

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
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
    <div>
      <form
        noValidate
        data-testid="login-form"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={values.email}
            type="email"
            name="email"
            id="email"
            data-testid="login-input-email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            value={values.password}
            type="password"
            name="password"
            id="password"
            data-testid="login-input-password"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={pageStatus === 'loading'}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login;
