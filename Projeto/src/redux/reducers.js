import { combineReducers } from 'redux' //isso é prório do reducers. 
//usa essa porque combina mais de um reducers

// criar uma função pra cuidar dos dados do usuário (redutor de usuário)
//redutor: reebe estado atual e a ação e como vai ser modificado parametros sao state e action
//recebe toda e qualquer ação disparada
//usa switch case porque são varias coisas que serão verificadas

//fora da função precisa criar uma variável para indicar o estado inicial do usuário
let usuarioInicial = null  //mudou para let . antes era const
//sempre tem que receber um estado inicial

const json = localStorage.getItem('usuario')
if(json){
    usuarioInicial = JSON.parse(json)
}
//caso o state não receba nenhum valor, venha parametro vazio, vai receber o valor inicial do usuarioInicial

function usuario (usuarioAtual = usuarioInicial, action) {
    switch(action.type) {
        //verifica o tipo da ação
        //e usar cada case em caixa alta é uma convenção

        case 'LOGA_USUARIO':
        //tem que receber um objeto que representa o usuário logado
        //é da ação que pega os dados do usuário. a ação é o parametro
        const usuarioLogado = action.dados

        const json = JSON.stringify(usuarioLogado)
        //tornar texto e guarda na variável
        //guarda em local storage
        localStorage.setItem('usuario',json)

        //dados vem da action que mostra dados tipo email e o que mais foi passado
        return usuarioLogado //com os dados
        case 'DESLOGA_USUARIO':
        //para remover a locaStorage
        localStorage.removeItem('usuario')
        const usuarioDeslogado = null
        //null porque acabou de sair do sistema
        return usuarioDeslogado //retorna vazio, nulo
        default:
        return usuarioAtual 
        //state com o estado inicial
        //caso não logue, nem deslogue, o default vai ser  com o estado atual usuarioAtual
        //retorna o parametro do jeito que recebeu
        //qd recebe postit o return é default

    }
}

//sempre retornar novo objeto porque o redux preza pela imutabilidade
// const action = {
//     type: 'LOGA_USUARIO',
//     dados: {email: 'chibaeriyo@gmail.com'}
// }

function postits(stateAtualDoPostit = [], action){
    //também é um redutor, e tb recebe switch case, igual acima
    switch(action.type) {
        //verifica o tipo da ação
        //e usar cada case em caixa alta é uma convenção
        //só faz algo quando receber postits novos portanto, a logausuario nao vai fazer diferença]
        case 'CADASTRA_POSTIT':
            //retorna um novo array contendo o postit - o concat
            return stateAtualDoPostit.concat(action.dados)
            //para acessar todos os dados do postit que sao título e a mensagem
            //vai concatenar o state com os dados e retornar um novo array
        case 'ALTERA_POSTIT':
        return stateAtualDoPostit.map(item=>
            item.id=== action.dados.id ? action.dados : item)
        //se o postit tem igual id igual ao id que tem os dados iguais dos dados da ação troca os dados, senão retorna como estava
        //vai retornar uma array com os dados alterados
        case 'REMOVE_POSTIT':
        return stateAtualDoPostit.filter(item =>
            item.id !== action.id)
        //filtra os com os ids diferentes porque a que tem o id que eu quero remover não interessa mais 
        //vai retornar um nov array sem o que remove
        //filtrar os posts que tenham um id diferente do que vai remover
        default: 
        return stateAtualDoPostit
    }
}

// const objeto = {usuario:usuario, postits: postits}

const reducers = combineReducers({
    usuario: usuario,
    postits: postits
})
//aqui tem que receber as duas funções combinadas

export default reducers //e por fim eles são exportados