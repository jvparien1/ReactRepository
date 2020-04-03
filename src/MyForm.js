import React from 'react';


class MyForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {username: "", age:""};
  }

  inputChangeHandler = (event) => {

    // this.setState({username : event.target.value});
    let inputName = event.target.name;
    let inputValue = event.target.value;

    if (inputName === "age" && isNaN(inputValue)){
      alert("Age is not a numeric value !");
      event.target.value = "";    }
    else{
      this.setState({[event.target.name] : event.target.value});
    }
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    alert("Submitting for: " + this.state.username + ",who is: " + this.state.age);

  }

  render(){

        let header = (this.state.username.length > 0) ? <h1>Hello {this.state.username}</h1> : "";

        return (
            <form>
            {header}
            <p>Enter your name:</p>
            <input type="text" name='username' onChange={this.inputChangeHandler} />
            <p>Enter your age:</p>
            <input type='text' name='age' onChange={this.inputChangeHandler} />
            <input type="button" value="Submit Form" onClick={this.inputSubmitHandler} />
            </form>
        );
    } 
  }

export default MyForm;