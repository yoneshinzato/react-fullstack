import React from 'react'
import morrissey from './morrissey-sad-not-found.png'
import './NaoEncontrada.css'
//para importar imagens

function NaoEncontrada(){
    return(
       <main className="nao-encontrada">
            <h1>Página não encontrada</h1>
            <p className="nao-encontrada__simbolo">
                :-(
            </p>
            <img src={morrissey} alt="Morrissey não encontrado" />
            
       </main> 
    )
}

export default NaoEncontrada