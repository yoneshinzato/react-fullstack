import React, { Component } from "react";
import { connect } from "react-redux";
//importa o conect
import { Redirect } from "react-router-dom";
import "./Home.css";
import Postit from "../../componentes/Postit/Postit";
import { listaPostits } from "../../redux/actions";
import carregando from "./carregando.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carregando: true
    };
  }
  //pode deixar o state inicial do carregando como true

  //vai chamar a lista de postits
  componentDidMount() {
    //busca da api a lista de postits e põe no state da store
    //só é chamado uma vez
    //método vai ser chamado pelo React toda vez que o comp. Home
    //aparecer na tela pela primeira vez, que vai disparar a função listaPostits()
    this.props.listaPostits();
  }

  componentDidUpdate() {
    //vai ser chamado pelo React toda vez que a tela atualizar ou alterar ou acrescentar algo, vai ser chamado e atualizar
    if (this.state.carregando) {
      this.setState({ carregando: false });
    }
  }

  render() {
    if (!this.props.usuario) {
      return <Redirect to="/login" />;
      //vai importar do react router
      //tá usando classe então tem que usar this.props.usuario
    }

    return (
      <main className="home">
        {this.state.carregando ? (
          <img className="home__loading" src={carregando} alt="carregando" />
        ) : (
          <div>
            <Postit />
            {/* esse é o postit default de cadastro, por isso tá vazio */}

            <div>
              {/* percorrer toda lista e para cada postits vai usar uma tag postit */}
              {this.props.postits.map(postit => (
                // para cada item da lista retorna uma tag postit
                //pega o título e o testo do postit e passar
                <Postit
                  key={postit.id} //o key é específico do react
                  //precisa desse identificador para cada postit
                  //e pra parar de aparecer um erro
                  id={postit.id}
                  titulo={postit.titulo}
                  texto={postit.texto} //são novas propriedades para o postit
                  //entao vai ter que fazer o título e o texto aparecerem dentro do input e do textarea
                  // tudo que vai como atributo acima como props passa como props em postit.js
                />
              ))}
            </div>
          </div>
        )}
      </main>
      //if dentro da tag coloca chave
    );
  }
}

export default connect(
  state => (
    {
      usuario: state.usuario,
      postits: state.postits
    },
    { listaPostits }
  )
)(Home);

// const props = {
//   usuario: state.usuario,
//   postits: state.postits,
//   listaPostits
// };

// <Home
//   usuario={state.usuario}
//   postits={state.postits}
//   listaPostits={listaPostits}
// />;
