import React from 'react'
import './Botao.css'

function Botao(props) {
  let classes = "botao"

  if (props.desabilitado) {
    classes += " botao--desabilitado"
    //se estiver desabilitado, adiciona a classe botao--desabilitado
  }
  
  return (
    <button className={classes} disabled={props.desabilitado}> 
      {props.children}
    </button>
  )
  //o disabled é do html
}

export default Botao