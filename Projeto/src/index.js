import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//esse componente import o react router, que é uma biblioteca o Switch significa mudar, literalmente
//associação de uma url com um componente se chama ROTA
import { Provider } from 'react-redux'

//agora de fato vai conectar um componente criado em react para acessar a store
import store from './redux/store'
//esse store vai ser passado lá na tag Provider
import Navbar from './componentes/Navbar/Navbar'
import Conta from './paginas/Conta/Conta'
import Login from './paginas/Login/Login'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'


import './index.css'


//agora tudo isso abaixo que está comentado fica armazenado no store - nao vai ser mais necessario

//o app não precisa mais ficar conectado
//agora os componentes de conectam entre si, sem depender da App

function App(){
    //passa a receber tudo via props a function App (loga e desloga usuário etc)
    // const props = {
    //     usuario: usuario
    // }
 
    //so para não ter que fica passando a props abaixo
    // fez componente receber tudo via props, duas ações para disparar ações logaUsuario e deslogaUsuario

    return(
        //HTML dentro da div abaixo tem que aparecer o esqueleto da página e as coisas que vão mudar
        <div className="app">
            <Navbar />
            {/* achou usuario aqui em index, passa o usuário, então, para a tag navbar, agora ver o código da navbar */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} /> 
                {/* tá conectado com login.js agora */}
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


// const state = {
//     usuario: {email: "camila@email.com"}
// }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,  document.getElementById('projeto')
    )
    // trocou, antes era <App/> 

{/* // BrowserRouter escuta oa mudanças de url da página toda 
//para escolher o componente certo para mostrar na tela */}
//qualquer componente que tiver aí dentro da Provider, 
//vai usar a mesma store, acessar os dados dessa mesma store, desde que se conecte a store