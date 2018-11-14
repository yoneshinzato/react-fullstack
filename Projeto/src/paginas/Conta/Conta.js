import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

// O componente pode mudar de estado? Sim - Class
// O que muda? setState({desabilitado:false}) ou setState({desabilitado:true})
//Qual estado inicial? state = { desabilitado: false} //constructor

//function onChange para verificar se todos os campos estao corretos (não tem erro)




class Conta extends Component {
  constructor(props){
    super(props)
    this.nomeRefer = React.createRef()
    this.teleRefer = React.createRef()
    this.emailRefer = React.createRef()
    this.passRefer = React.createRef()
    this.state = {desabilitado:true}

  }

  habOuDesab = (eve) => {
    const campoNomeRefer = this.nomeRefer.current
    const campoTeleRefer = this.teleRefer.current
    const campoEmailRefer = this.emailRefer.current
    const campoPassRefer = this.passRefer.current

    if(campoNomeRefer.temErro() || campoTeleRefer.temErro() || campoEmailRefer.temErro() || campoPassRefer.temErro() ){
      this.setState({desabilitado: true})
    } else {
      this.setState({desabilitado:false})
    }
//habilita ou desabilita de acoredo com o estado
  }

  render(){
    return(
      <main className="conta">
      <h1>Conta</h1>
      <p>Envie o formulário para criar uma conta!</p>
      
      <Legenda htmlFor="">Nome:</Legenda>
      <Campo 
      ref={this.nomeRefer}
      id="nome" 
      type="nome" 
      name="nome" 
      placeholder="Nome" 
      minLength={10} 
      required 
      onChange={this.habOuDesab}
      />

      <Legenda htmlFor="telefone">Telefone:</Legenda>
      <Campo 
      ref={this.teleRefer}
      id="telefone" 
      type="tel" 
      name="telefone" 
      placeholder="Telefone" 
      required 
      onChange={this.habOuDesab}
      />

      <Legenda htmlFor="email">Email:</Legenda>
      <Campo 
      ref={this.emailRefer}
      id="email" 
      type="email" 
      name="email" 
      placeholder="Email" 
      required 
      onChange={this.habOuDesab}
      />
      
      <Legenda htmlFor="senha">Senha:</Legenda>
      <Campo 
      ref={this.passRefer}
      id="senha" 
      type="password" 
      name="senha" 
      placeholder="Senha" 
      required 
      minLength={6} 
      onChange={this.habOuDesab}
      />
      
      <Botao desabilitado={this.state.desabilitado}> 
        Enviar
      </Botao>

      <Link url="/conta">Fazer login</Link>
    </main>
    )
  }
}


export default Conta