import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//esse componente import o react router, que é uma biblioteca o Switch significa mudar, literalmente
//associação de uma url com um componente se chama ROTA
import { connect, Provider } from 'react-redux'

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


// let usuario = JSON.parse(localStorage.getItem('usuario'))
// //antes o usuario era null
// //agora pega o que estava no localStorage e transforma de novo em objeto



// function logaUsuario(dados) {
//     //vai armazenar esses dados no local storage convertidos como texto
//     //vai armazenar os dados em texto stringify, por isso dados é passado como parametro
//     const json = JSON.stringify(dados) //função javascript
//     localStorage.setItem('usuario', json)

//     //adiciona um item dentro do armazenamento local do browser
//     //vai recceber doir parametros, nome, texto
//     usuario = dados

//     console.log('usuario')
// }

// function deslogaUsuario(){
//     //precisa remover o item do locaStorage e esvaziar a function logaUsuario
//     localStorage.removeItem('usuario')
//     usuario = null
    
// }

//a função vai chamar a página de login, que é onde tem o botão que envia o evento
// const props = {
//     historico: {},
//     onEnviar: () => {} //chama logaUsuario
// }

// props.onEnviar(dados)

//comentário

function App(props){
    //passa a receber tudo via props a function App (loga e desloga usuário etc)
    // const props = {
    //     usuario: usuario
    // }
    const usuario = props.usuario
    const logaUsuario = props.logaUsuario
    const deslogaUsuario = props.deslogaUsuario
    //so para não ter que fica passando a props abaixo
    // fez componente receber tudo via props, duas ações para disparar ações logaUsuario e deslogaUsuario

    return(
        //HTML dentro da div abaixo tem que aparecer o esqueleto da página e as coisas que vão mudar
        <div className="app">
            <Navbar />
            {/* achou usuario aqui em index, passa o usuário, então, para a tag navbar, agora ver o código da navbar */}
            <Switch>
                <Route path="/" exact render={() => {
                    return usuario ? <Home /> : <Redirect to="/login" />
                }} />
                <Route path="/login" component={Login}/> 
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

function passaDadosDoEstadoParaMeuComponente(state){
    //mesmo state guardado lá na store
    const props = {
        usuario: state.usuario
        //pega o estado do usuario e lá embaixo retorn o props
    }

    return props
}

function passaFuncoesQueDisparamAcoesViaProps(dispatch){
    //tem acesso à ação que dispara a ação e se chama dispatch
    //tb retorna algo que vai ser colocado dentro do props
    //pode criar um props objeto e dentro dele passar funções com seus componenetes que disparam ações
    const props = {
        //aqui vai passar o logaUsuario, que é uma função que vai ser chamada pelo componente, que é uma tag
        //e que vai disparar uma ação
        logaUsuario: (dados) => {
            const acao = {
                //vai receberum type obrigatoriamente. vai ser igual o que tá no switch case do reducers
                type: 'LOGA_USUARIO',
                dados: dados
                //passa os dados (tipo o email)
            }

            dispatch(acao)
        },

        //vai ser chamada quando alguem desloga do navbar e tb vai disparar uma ação
        // passa um objeto acao e libera o dispatch com ação
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }

            dispatch(acao)
        }

    }

    return props
}

//ta ligado ao connect lá de cima, que foi importado



const conectaNaStore = connect(
    passaDadosDoEstadoParaMeuComponente,
    passaFuncoesQueDisparamAcoesViaProps 
)
//recebedados do estado via props do meu componente
//o segundo parametro, que é uma função que permite que o componente dispare acoes
//acesso ao connect e ao dispatch

//junta as props das duas funções e passa tudo para o componente app abaixo
//vira um único objeto props com as duas coisas
//aí pega esse props e passa tudo num atributo só

//recebe o componente App

{/* <App usuario={usuario} logaUsuario={() =>{}} deslogaUsuario={() => ()} /> */}

const AppConectada = withRouter(conectaNaStore(App))
//funciona por causa do redux agora e chamou o withRouter lá em cima
//https://reacttraining.com/react-router/web/guides/redux-integration

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppConectada />
        </BrowserRouter>
    </Provider>,  document.getElementById('projeto')
    )
    // trocou, antes era <App/> 

{/* // BrowserRouter escuta oa mudanças de url da página toda 
//para escolher o componente certo para mostrar na tela */}
//qualquer componente que tiver aí dentro da Provider, 
//vai usar a mesma store, acessar os dados dessa mesma store, desde que se conecte a store