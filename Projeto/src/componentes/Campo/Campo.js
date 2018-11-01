import React, { Component } from 'react'
import './Campo.css'

class Campo extends Component {
  constructor(props){
    super(props)
    this.valor = ''
    this.state = {
      modificado: false, 
      erro: ''
    }
  
    //começa vazio o value, e depois o valor é salvo dentro da classe Campo

//inicia com erro, e modificado false retorna sem erro se estiver vazio ou se modificou 
  }

  getValor = () => {
    return this.valor;
  }

  /*
1) O componente pode mudar de estado? Sim // Classe
2) O que muda? state = { erro: '' } ou {erro: 'Campo obrigatório'}
3) Qual o estado inicial? state = { erro: '' } //constructor
4) O que faz ele mudar?
// function onChange pra verificar se eu devo ou não mostrar uma mensagem de erro
if condicao mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/

  // class Paciente extends Pessoa - para fazer uma analogia
  //não pode colocar return porque é classe, não função
  //é obrigatório ter o render
  //não precisa escrever function dentro da classe
  //a render não recebe parâmetro.
  //acessa o props usando o this

  temErro() {
    if( (this.props.required && !this.state.modificado) || this.state.erro){
      return true
    } else{
      return false
    }
  }


  
  valida = (evento) => {
    //escrevendo dessa forma, não precisa usar o bind
    const input = evento.target //como se fosse document.getElementById('id')
    //indica qual o campo alvo do evento
    const { value, type } = input

    this.valor = value

    const {required, minLength, pattern } = this.props
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let mensagem = ''
    //ele já inicia vazia a mensagem
    
    //refatorando o código - reescrevendo o código dessa função

    // if (this.props.required && input.value.trim() === '') {//email obrigatório
    //   //required para ser obrigatório
    //   //trim são espaços em branco no começo ou fim do que é digitado no input
    //   this.setState({erro: 'Campo obrigatório'})
    //   //muda para a mensagem de erro acima - campo obrigatório
    //   console.log('O estado é', this.state)
    // } else if (this.props.minLength && input.value.length < this.props.minLength){
    //   this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
    // } else if(this.props.pattern && !this.props.pattern.test(input.value)){
    //   //verifica se o texto bate com o paixão da regex
    //   this.setState({erro: "Valor inválido"})
    // } else{
    //   this.setState({erro:''})
    // }

    //código if acima refatorado
    if(required && value.trim() === ''){
      mensagem = 'Campo obrigatório'
    } else if (minLength && value.length < minLength){
      mensagem = `Digite pelo menos ${minLength} caracteres`
    } else if(type  === 'email' && !regex.test(value)){
      mensagem = "Valor inválido"
    }

    this.setState({ modificado: true, erro: mensagem},
    this.props.onChange
    //
    //chama o onChange da tag filha (se está tudo ok!), depois o da tag mãe
    )

  }
  //a mensagem de erro já está vazia, não precisa colocar de novo
  //

  render(){
    
    return (
      <div>
        <input 
          id={this.props.id}
          //pega a informação do campo id - o this referencia
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida} //a função é chamada pelo navergador, por isso não precisa do ()
          //recebe o nome da função que tem que executar toda vez que ocorrer uma mudança no conteúdo digitado no texto
          onBlur={this.valida} //quando troca de campo
        />
        <p className="grupo__erro">{this.state.erro}</p>
      </div>
    )

  }
}

export default Campo


