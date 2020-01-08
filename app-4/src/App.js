import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component{
  constructor(){
    super()

    this.state={
      username: '',
      password: ''
    };
    this.handleLogin=this.handleLogin.bind(this)
  }

  handleChangeUsername(val){
    this.setState({username:val})
  }

  handleChangePassword(val){
    this.setState({password: val})
  }

  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render(){
    return(
      <div>
        <input onChange={e=>this.handleChangeUsername(e.target.value)} type='text'/>
        <input onChange={e=>this.handleChangePassword(e.target.value)} type='text'/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login;
