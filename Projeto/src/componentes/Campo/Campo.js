import React from 'react'
import './Campo.css'

class Campo extends React.Component {
  // class Paciente extends Pessoa - para fazer uma analogia
  //não pode colocar return porque é classe, não função
  //é obrigatório ter o render
  //não precisa escrever function dentro da classe
  //a render não recebe parâmetro.
  //acessa o props usando o this
  

  render(){
    console.log("só pra checar");
    return (
      <div>
        <input 
          id={this.props.id}
          //pega a informação do campo id - o this referencia
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
        />
      </div>
    )

  }
}

export default Campo


// class Campo extends React.Component {
//   //herda tudo o que de classes o react tem
//   constructor(props) {
//     super(props)
//     this.state = {
//       erro: ''
//     }

  
//   }

//   valida = (evento) => {
//     const alvo = evento.target

//     if(this.props.obrigatorio === 'nome' && alvo.value.trim === ''){
//       const state = {
//         erro: 'Campo obrigatório'
//       }
//       this.setState(state)
//     }
//   }

//   render(){
//     return (
//       <div>
//         <input 
//         id={this.props.id}
//         className="campo"
//         type={this.props.type}
//         name={this.props.name}
//         placeholder={this.props.placeholder}
//         onChange={this.valida}
//       />
//       <p className="grupo__erro">{this.state.erro}</p>
//       </div>
//     )
//   }
// }




// export default Campo