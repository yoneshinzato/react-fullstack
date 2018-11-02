import React from 'react'
import { Link as PaginaLink } from 'react-router-dom'
// para não confundir com o Link do arquivo
import './Link.css'

function Link(props) {
  return (
    <PaginaLink className="link" to={props.url}> //muda o href para 'to'
      {props.children}
    </PaginaLink>
  )
}

export default Link