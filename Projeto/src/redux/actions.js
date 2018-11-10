import axios from 'axios'

const configuracoes = {
    baseURL: 'https://reprograma-postit-api.herokuapp.com'
}

//criou a api e hospedou no servidor. aí passa para o front-end

const json = localStorage.getItem('usuario')
if(json) {
    let usuario = JSON.parse(json)
    configuracoes.headers = {
        'Authorization': usuario.token
    }
}
// header é o que passa nas requisições get e set da api
// verificar se dentro tem usuário tem token

const api = axios.create(configuracoes)
//axios cria o objeto que cria a api


export function logaUsuario(dados){
    return (dispatch) =>{
        //passar os dados do usuario usa o metodo post
        api
        .post('/login', dados)
        .then(response =>{
        api.defaults.headers.common['Authorization'] = response.data.usuario.token //pega o token do usuario que vem do json, do localStorage

           dispatch({
                type: 'LOGA_USUARIO', 
                dados: response.data.usuario})
        })

    }
    
    //função que cria a ação do objeto logar o usuário
  }
//veio de Login.js e onde agora foi passado o objeto {logaUsuario}
//antes chamava noPropsPassaAcoes
//não vai precisar mais passar o dispatch

//redux thunk vai retornar uma função que recebe o dispatch que dispara a ação quando achar que for melhor

export function deslogaUsuario(){
    return {
        type: 'DESLOGA_USUARIO'
    }

}

export function cadastraPostit(dados){
    //retorna um objeto que representa a ação
    return (dispatch) => {
        //chamar api pra dispar ação
        api
        .post('/postits', dados)
        .then(response =>{
            dados.id = response.data.id 
            dispatch({type: 'CADASTRA_POSTIT', dados})
        })
        //then função executada quando a api responder
        //chama a api usando o verbo post , chama a url e depois os dados
        //pra cadastrar é usado o verbo post , que espera receber um segundo parametro, os dados do postits que ela quer enviar
        //esse /postits tá no link passado lá em cima
        
    }
}

export function alteraPostit(dados){
    return (dispatch) =>{
        const url = `/postits/${dados.id}`
        //primeiro chama a api e depois dispara a ação
        api
        .put(url, dados)  //altera o postit
        .then(() =>{
            dispatch({type:  'ALTERA_POSTIT', dados})
        })
    }
}

export function removePostit(id){
    return (dispatch) => {
        const url = `/postits/${id}`
        api
        .delete(url)
        .then(()=>{
            dispatch({type: 'REMOVE_POSTIT', id})
        })
    }
    
}