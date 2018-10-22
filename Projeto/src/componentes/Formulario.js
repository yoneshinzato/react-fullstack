import React from 'react'
import Link from './Link/Link'
import Botao from './Botao/Botao'
import Legenda from './Legenda/Legenda'
import Campo from './Campo/Campo';

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