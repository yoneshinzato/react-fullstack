import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//esse componente import o react router, que é uma biblioteca o Switch significa mudar, literalmente
//associação de uma url com um componente se chama ROTA
import Navbar from './componentes/Navbar/Navbar'
import Conta from './paginas/Conta/Conta'
import Login from './paginas/Login/Login'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'


import './index.css'
//teste teste 2


let usuario = JSON.parse(localStorage.getItem('usuario'))
//antes o usuario era null
//agora pega o que estava no localStorage e transforma de novo em objeto



function logaUsuario(dados) {
    //vai armazenar esses dados no local storage convertidos como texto
    //vai armazenar os dados em texto stringify, por isso dados é passado como parametro
    const json = JSON.stringify(dados) //função javascript
    localStorage.setItem('usuario', json)

    //adiciona um item dentro do armazenamento local do browser
    //vai recceber doir parametros, nome, texto
    usuario = dados

    console.log('usuario')
}

function deslogaUsuario(){
    //precisa remover o item do locaStorage e esvaziar a function logaUsuario
    localStorage.removeItem('usuario')
    usuario = null
    
}

//a função vai chamar a página de login, que é onde tem o botão que envia o evento
// const props = {
//     historico: {},
//     onEnviar: () => {} //chama logaUsuario
// }

// props.onEnviar(dados)

//comentário

function App(){
    // const props = {
    //     usuario: usuario
    // }

    return(
        //HTML dentro da div abaixo tem que aparecer o esqueleto da página e as coisas que vão mudar
        <div className="app">
            <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} />
            {/* achou usuario aqui em index, passa o usuário, então, para a tag navbar, agora ver o código da navbar */}
            <Switch>
                <Route path="/" exact render={() => {
                    return usuario ? <Home /> : <Redirect to="/login" />
                }} />
                <Route path="/login" render={(props) =>{
                    return <Login historico={props.history} onEnviar = {logaUsuario} />
                }} />
                {/* essa função tb pode receber props, assim como os componentes */}
                {/* pega o historico do navegador e faz um push */}
                {/* o history vai direcionar a página para home */}
                <Route path="/conta" component={Conta} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato} />
                <Route component={NaoEncontrada} />
                
                
            </Switch>
            
        </div>
        //atributo path é string, por isso tá entre aspas
        //path="/" component={X} é como se fosse para deixar essa página X na home
        //a nao encontrada vai ser utilizada quando nenhum dos caminhos acima for encontrado
        //é parecido com switch case do javascript. O default no caso é a página não encontrada
        //espera receber uma função arrow function 
        //por enquanto o usuario está vazio sem o backend
        //a condição é: se usuario não estiver preenchido (no caso, ainda nulo), redireciona para Login
        //caso esteja logado, direciona para home
        //redirect precisa saber qual endereço vai direcionar
        //o render em login vai servir para redirecionar pra pagina de login pra chamar o botao e o evento que envia usuario e senha
    )
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('projeto')
    )

// BrowserRouter escuta oa mudanças de url da página toda 
//para escolher o componente certo para mostrar na tela