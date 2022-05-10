import React from 'react'

export default function button() {
    console.log("button loged");
  return (
    <button{...props}>{props.children}</button>
  )
}
