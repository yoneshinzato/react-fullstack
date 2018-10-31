import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//esse componente import o react router, que é uma biblioteca o Switch significa mudar, literalmente
//associação de uma url com um componente se chama ROTA
import Conta from './paginas/Conta/Conta'
import Login from './paginas/Login/Login'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'


import './index.css'
//comentário
function App(){
    return(
        //HTML dentro da div abaixo tem que aparecer o esqueleto da página e as coisas que vão mudar
        <div className="app">
            {/* <NavBar /> */}
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/conta" component={Conta} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato} />
                
            </Switch>
            
        </div>
        //atributo path é string, por isso tá entre aspas
        //path="/" component={X} é como se fosse para deixar essa página X na home
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