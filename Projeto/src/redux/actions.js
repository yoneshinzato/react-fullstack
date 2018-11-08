export function logaUsuario(dados){
    return {
        type: 'LOGA_USUARIO',
        dados //dados:dados agora pode escrever só dados - sintaxe nova do javascript
    }  
    //função que cria a ação do objeto logar o usuário
  }
//veio de Login.js e onde agora foi passado o objeto {logaUsuario}
//antes chamava noPropsPassaAcoes
//não vai precisar mais passar o dispatch


export function deslogaUsuario(){
    return {
        type: 'DESLOGA_USUARIO'
    }

}