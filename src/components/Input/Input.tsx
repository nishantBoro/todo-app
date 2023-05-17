import React, { ChangeEvent } from 'react';

import styles from './styles.module.css'

interface InputType {
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  className: string
}

function Input({
  placeholder,
  onChange,
  className
}: InputType) {
  return (
    <input
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      onChange={onChange}
    />
  )
}

export default Input;
