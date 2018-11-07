import React from 'react'
import { connect } from 'react-redux'
//importa o conect
import { Redirect } from 'react-router-dom'
import './Home.css'

function Home(props){
    //quando faz o connect, o componente recebe props
    if(!props.usuario){
        return <Redirect to="/login" />
        //vai importar do react router 
    }
    //tá fazendo a condição que antes estava no index pra acessar a home
    //ou se vai redirecionar para o login
    //se não estiver logado, ele nem vai entrar na home
    //então nem vai dar o return abaixo]
    //aí quando entra de novo, e está logado, entra na home
    return(
       <main className="home">    
            
       </main> 
    )
}

//precisa agora pegar dados do estado

function passaDadosDoEstadoNoProps(state){
    //retorna o que quer colocar dentro do props
    return {
        usuario: state.usuario
    }
}

const conectaNaStore = connect(passaDadosDoEstadoNoProps)
//aqui como é passada a função, ele já dedux que o primeiro item é null

const HomeConectado = conectaNaStore(Home)

export default HomeConectado
