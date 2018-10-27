import React from 'react'
import './Campo.css'

class Campo extends React.Component {

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
  constructor(props) {
    super(props)
    this.state = {erro: ''}
  }
  
  valida = (evento) => {
    //escrevendo dessa forma, não precisa usar o bind
    const input = evento.target //como se fosse document.getElementById('id')
    //indica qual o campo alvo do evento
    console.log('chama o valida');
    console.log('alvo do evento', input);

    if (this.props.required && input.value.trim() === '') {//email obrigatório
      //required para ser obrigatório
      //trim são espaços em branco no começo ou fim do que é digitado no input
      this.setState({erro: 'Campo obrigatório'})
      //muda para a mensagem de erro acima - campo obrigatório
      console.log('O estado é', this.state)
    } else if (this.props.minLength && input.value.length < this.props.minLength){
      this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
    } else{
      this.setState({erro:''})
    }

  }

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
        />
        <p className="grupo__erro">{this.state.erro}</p>
      </div>
    )

  }
}

export default Campo


