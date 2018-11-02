import React from 'react'
import logo from './logo.png'
import './Navbar.css'
import Menu from '../Menu/Menu'

// menu tem estado porque abre e fecha
//a nav bar nao

//recebe atributo quando se usa props
//<Navbar />
//a href = '/' porque envia pra home

//colinha de como está usando a tag lá em cima
//<Navbar usuario={usuario} deslogaUsuario={desloga} />
//const props = {usuario:usuario, deslogaUsuario:usuario}
//o props tem todos atributos passados pra tag

//<Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} />
//const props = {usuario:usuario, deslogaUsuario:deslogaUsuario }

function Navbar(props) {
    return (
        <header className="navbar">
            <a href='/'> 
                <img className="navbar__logo" src={logo} alt="logo" />
            </a>

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
            {/* passa o atributo usuário porque está no menu, não na navbar
            em seguida, abre o menu */}
        </header>
    )
}

export default Navbar