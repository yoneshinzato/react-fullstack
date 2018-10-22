import React from 'react'
import './Botao.css'

function Botao(props) {
  let className = 'botao'

  if (props.disabled) {
    className += ' botao--desabilitado'
  }

  return (
    <button className={className} disabled={props.disabled}>
      {props.children}
    </button>
  )
}

export default Botao