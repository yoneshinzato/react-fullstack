import React from 'react'
import Link from './Link'
import Botao from './Botao'
import Legenda from './Legenda'
import Campo from './Campo';

function Formulario(props) {
  return (
    <form>
      <h1>{props.titulo}</h1>
      <p>{props.texto}</p>
      {props.children}
    </form>
  )
}

Formulario.Link = Link
Formulario.Botao = Botao
Formulario.Legenda = Legenda
Formulario.Campo = Campo

export default Formulario