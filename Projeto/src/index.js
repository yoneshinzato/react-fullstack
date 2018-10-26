import React from 'react'
import ReactDOM from 'react-dom'
import Conta from './paginas/Conta/Conta';
import './index.css'


const pagina = <Conta />

const divisaoProjeto = document.getElementById('projeto')

ReactDOM.render(pagina, divisaoProjeto)
