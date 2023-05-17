import React, { ChangeEvent } from 'react';

import styles from './styles.module.css'

interface InputType {
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({
  placeholder,
  onChange
}: InputType) {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    />
  )
}

export default Input;
