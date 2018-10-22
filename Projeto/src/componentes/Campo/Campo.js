import React from 'react'
import './Campo.css'

function Campo(props) {
  return (
    <input className="campo" id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} />
  )
}

export default Campo