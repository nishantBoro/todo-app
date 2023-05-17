import React, { ReactNode, MouseEvent, HTMLProps } from 'react';

import styles from './styles.module.css'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: string
  children: ReactNode
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  isFullWidth?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
}


function Button(props: ButtonProps) {
  const { 
    variant = 'primary', 
    children, 
    handleClick, 
    className, 
    type, 
    isFullWidth = false 
  } = props;

  const classNamesMap: {
    [k:string]: string
  } = {
    primary: styles.primary
  }

  return (
    <button 
      className={`${classNamesMap[variant]} ${className} ${isFullWidth ? styles.isFullWidth : ''}`}
      onClick={handleClick}
      type={type}
    >
      { children }
    </button>
  )
}

export default Button;
