import React from 'react';


class MyForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {username: ""};
  }

  inputChangeHandler = (event) => {

    this.setState({username : event.target.value})
  }

  render(){

        return (
            <form>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your name:</p>
            <input type="text" onChange={this.inputChangeHandler} />
            </form>
        );
    } 
  }

export default MyForm;