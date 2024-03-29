"use client"
import React from 'react'

const Button = ({data, type, style, text}) => {
  
  return <button  type={type} className={style}>{text}</button>
  
}

export default Button