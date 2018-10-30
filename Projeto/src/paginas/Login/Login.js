import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
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
      </main>
      );
    }
  }

  


export default Login
