import React,{Component} from 'react';

import Axios from 'axios';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    atualizaEstadoEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value});
    }
    
    efetuarLogin = (event) =>{
        event.preventDefault();
        
        Axios.post("http://192.168.7.85:5000/api/login", {
            email: this.state.email, 
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-roman",response.data.token);
                    this.props.history.push('/app');
                }else{
                    console.log('Algo deu errado');
                }
            })
            .catch(erro => { 
                this.setState({ erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
    }

    render(){
        return(
        <section className="corpo">
                <div className="item">
                </div>
                <div>
                    <p>Loga aí meu camarada!</p>
                </div>
                <form onSubmit={this.efetuarLogin}>
                    <div className="item">
                    <input
                        className="input"
                        placeholder="username"
                        onInput={this.atualizaEstadoEmail}
                        type="text"
                        name="username"
                        id="login"
                    />
                    <p 
                        className="text__login"
                        style={{color: "red", textAlign: "center"}}
                    >
                        {this.state.erro}
                    </p>
                    </div>
                    <div className="item">
                    <input
                        className="input__login"
                        onInput={this.atualizaEstadoSenha}
                        placeholder="password"
                        type="password"
                        name="password"
                        id="login_password"
                    />
                    </div>
                    <div className="item">
                    <button className="btn btn_login" id="btn_login">
                        Login
                    </button>
                    </div>
                </form>
        </section>
        );
    }

}

export default Login;
