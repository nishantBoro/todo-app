import React, { ReactNode, MouseEvent } from 'react';

import styles from './styles.module.css'

interface ButtonTypes {
  variant?: string
  children: ReactNode
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function Button(props: ButtonTypes) {
  const { variant = 'primary', children, handleClick } = props;

  const classNamesMap: {
    [k:string]: string
  } = {
    primary: styles.primary
  }

  return (
    <button 
      className={classNamesMap[variant]}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}

export default Button;
