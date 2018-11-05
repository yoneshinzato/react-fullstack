import { createStore } from 'redux'
//createStore é uma função do redux

import reducers from '.reducers'

//chama a função createStore que espera receber quais são os redutores - reducers
const store = createStore(reducers) //esses redutores não existem ainda e serão criados em outros arquivos

export default store