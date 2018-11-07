import React from 'react'
import { connect } from 'react-redux'
//vai conectar um componente de react com redux
import { Link, withRouter } from 'react-router-dom'
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
            <Link to='/'> 
                <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            {/* //usa a tag link do router */}

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
            {/* passa o atributo usuário porque está no menu, não na navbar
            em seguida, abre o menu */}
        </header>
    )
}

//criar a função que pega os dados do estado

function passaNoPropsDadosDoEstado(state){
    return {
        //tem que tudo que quer pegar do estado, que é o objeto usuário
        usuario: state.usuario
    }
}

function passaNoPropsDisparadoresDeAcao(dispatch){
    return {
        //precisa receber o dispatch como parametro
        //a função vai disparar uma ação quando for chamada
        deslogaUsuario: () => {

            const acao = {
                //cada acao recebe um tipo
                type: 'DESLOGA_USUARIO'
                //VAI VOLTAR NULO ENTAO NAO PRECISA PASSAR MAIS NADA
            }

            dispatch(acao)
        }
    }
}

const conectaNaStore = connect(
    passaNoPropsDadosDoEstado,
    passaNoPropsDisparadoresDeAcao
)

//chama na função para conectar

const NavBarConectado = conectaNaStore(Navbar)

//a connect retorna outra função


//agora precisa exportar o Navbar conectado


export default withRouter(NavBarConectado)
//porque o navbar usa a tag navlink