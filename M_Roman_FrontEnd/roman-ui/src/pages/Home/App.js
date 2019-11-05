import React, { Component } from 'react';

import Axios from 'axios';


class Projetos extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      nome: '',
      idTema: ''
    };
  }

  componentDidMount() {
    Axios.get('http://192.168.5.84:5000/api/projetos')
      .then(data => {
        this.setState({ lista: data.data });
      })
      .catch(erro => {
        console.log(erro);
      });
  }
  componentDidMount() {
    this.listaAtualizada();
  }

  listaAtualizada = () => {
    fetch('http://192.168.5.84:5000/api/projetos')
      .then(response => response.json())
      .then(data => this.setState({ lista: data }));
  }

  adicionaItem = (event) => {
    event.preventDefault();
    console.log(this.state.nome);
    fetch('http://192.168.5.84:5000/api/projetos', {
      method: "POST",
      body: JSON.stringify({ nome: this.state.nome , idTema: this.state.idTema}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this.listaAtualizada())
      .catch(error => console.log(error))

  }

  atualizarNome = (event) => {
    this.setState({ nome: event.target.value })
    console.log(this.state);
  }

  atualizaTema = (event) => {
    this.setState({ idTema: event.target.value })
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <main className="conteudoPrincipal">
          <div>
            <main>
              <section>
                <h1 >Projetos</h1>

                <div>
                  <h2>Cadastrar projetos</h2>
                  <form>
                    <div>
                      <input
                        type="text"
                        id="input"
                        placeholder="nome"
                        value={this.state.nome}
                        onInput={this.atualizarNome}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="input2"
                        placeholder="Id Tema"
                        value={this.state.idTema}
                        onChange={this.atualizaTema}
                      />
                      <div>
                        <button
                          id="btn__cadastrar"
                          onClick={this.adicionaItem}
                          className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                        >
                          Cadastrar
                            </button>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </main>
          </div>
          <section className="conteudoPrincipal-cadastro">
            <h1 className="conteudoPrincipal-cadastro-titulo">Projetos</h1>
            <div className="container" id="conteudoPrincipal-lista">

              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Projeto</th>
                    <th>Tema</th>
                  </tr>
                </thead>

                <tbody id="tabela-lista-corpo">
                  {
                    this.state.lista.map(element => {
                      return (
                        <tr>
                          <td>{element.idProjeto}</td>
                          <td>{element.nome}</td>
                          <td>{element.idTema}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default Projetos;