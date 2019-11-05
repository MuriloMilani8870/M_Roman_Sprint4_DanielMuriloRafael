import React,{Component} from 'react';

class Cadastrar extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            nome: ''
        };
    }

    componentDidMount(){
       this.listaAtualizada();
    }

    listaAtualizada = () =>{
        fetch('http://192.168.7.85:5000/api/categorias')
            .then(response => response.json())
            .then(data => this.setState({ lista: data}));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://192.168.7.85:5000/api/categorias',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
        
    }

    adicionaCategoria = () =>{
        let valores_lista = this.state.lista;
        let categoria = {nome: this.state.nome}

        valores_lista.push(categoria);

        this.setState({lista: valores_lista});
    }

    atualizarNome = (event) =>{
        this.setState({nome: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
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
                            value={this.state.nome}
                            onInput={this.atualizarNome}
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
        );
    }
}

export default Cadastrar;