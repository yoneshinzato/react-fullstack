import { createStore, applyMiddleware, compose } from 'redux'
//createStore é uma função do redux

import reducers from './reducers'
//importa reducers combinados

import thunk from 'redux-thunk'
//thunk permite que faça coisas assíncronas antes de disparar a ação

const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //parecido com o combine do reducers

//chama a função createStore que espera receber quais são os redutores - reducers
const store = createStore(reducers, //esses redutores não existem ainda e serão criados em outros arquivos
    composeEnhancers(applyMiddleware(thunk)
    )
)

//https://github.com/zalmoxisus/redux-devtools-extension em basic store desse link
//o store só vai saber as funções que tem que chamar porque os redutores foram exportados 
//só acontecem as ações se os reducers forem recebidos
export default store

//o store só armazena, pois vai ser usado mesmo é no index