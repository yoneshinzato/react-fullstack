import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import { connect } from 'react-redux'
//abre o código da tag link e troca a tag <a> pelo <Link do react-router
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    //são chamadas no render pra acessar as propriedades lá embaixo
    this.state = {desabilitado: true}
  }

  //função envia Dados para enviar os dados do formulário
  //coloca dentro do objeto o que a pessoa digitou em email e senha
  //ela começa vazia
  //onEnviar guarda a função que tem que ser chamada entao é this.props.onEnviar que é a função que está em index.js
  enviaDados = (evento) => {
    evento.preventDefault()
    //previne comportamento padrão do evento, não vai jogar pra outra tela

    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    //esses campos vai pegar quando o usuário digita email e senha e eles serão armazenados 
    const dados = {
      email: campoEmail.getValor(),
      senha: campoSenha.getValor()
    }
    this.props.logaUsuario(dados)
    //não é mais onEnviar, porque agora chama logaUsuario
    // aqui tá chamando o evento que ocorre na tag mãe
    //tá chamando a função logaUsuario

    this.props.history.push('/')
    //vai adicionar a nova url que se quer colocar
    //como não passa mais historico:history como era antes, pode colocar history direto
  
  }

  habilitaOuDesabilita = (evento) => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    //esse current pega o this da classe = é especificação da documentação esse current - é de atual mesmo
    
    if(campoEmail.temErro() || campoSenha.temErro()){
      this.setState({desabilitado: true})
    }else {
      this.setState({desabilitado:false})
    }
  }
    render(){
      return (
        <main className="login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>

        <form onSubmit={this.enviaDados}>
          {/* onSubmit é usado para enviar as informações do formulario */}
          {/* // a função pegaDados vai pegar os dados que o usuário vai digirar no formulário
          //como está dentro de uma classe é this.enviaDados */}
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo
              ref={this.emailRef}
              //acessa todas as propriedades de Campo e guarda em this.emailRef
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={this.habilitaOuDesabilita}
            />

            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo
              ref={this.senhaRef}
              //dá acesso a todas propriedades dentro do campo senha
              id="senha"
              type="password"
              name="senha"
              placeholder="Senha"
              required
              minLength={6}
              onChange={this.habilitaOuDesabilita}
            />

            <Botao desabilitado={this.state.desabilitado}>
              Enviar
        </Botao>


            <Link url="/conta">Criar uma conta</Link>
        </form>
        
      </main>
      );
    }
  }

  //historico={props.history} onEnviar = {logaUsuario}

  //criar a função que pega dados do estado

  //login só loga, então não recebe um state

  function noPropsPassaAcoes(dispatch){
    return {
      //precisa receber o dispatch como parametro
      //a função vai disparar uma ação quando for chamada
      logaUsuario: (dados) =>{
        const action = {
          //CADA AÇÃO RECEBE UM TIPO
          type: "LOGA_USUARIO",
          dados: dados
        }
        dispatch(action)
      }
    }
  }

  const conectaNaStore = connect(null, noPropsPassaAcoes)
  //colocou nulo porque a primeira não tem nada pra pegar no estado
  //mas a segunda tem a função a ser executada
  //chama na função para conectar

  const LoginConectado = conectaNaStore(Login)

export default LoginConectado
