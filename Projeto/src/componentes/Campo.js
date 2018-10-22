import React from 'react'

function Campo(props) {
  return (
    <input className="caixa-texto" id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} />
  )
}

export default Campo