import React, { ChangeEvent } from 'react';

import styles from './styles.module.css'

interface InputType {
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  value?: string,
  type?: string,
  name?: string,
  id?: string
}

function Input({
  placeholder,
  onChange,
  className,
  value,
  type,
  name,
  id
}: InputType) {
  return (
    <input
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      id={id}
    />
  )
}

export default Input;
