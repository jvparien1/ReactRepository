import React from 'react';
import './MyForm.css'


class MyForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "", 
      age:"", 
      textMessage: "",
      countrySelected: "Canada", 
      errorMessage: ""};
  }

  inputChangeHandler = (event) => {

    // this.setState({username : event.target.value});
    let inputName = event.target.name;
    let inputValue = event.target.value;

    if (inputName === "age" && isNaN(inputValue)){
      this.setState({errorMessage:"Your age value must be a number before submit"});
      document.getElementById("btnSubmit").disabled = true;
      //event.target.value = "";    
    }
    else{
      this.setState({[event.target.name] : event.target.value});
      this.setState({errorMessage:""});
      document.getElementById("btnSubmit").disabled = false;
    }
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    alert("Submitting for: " + this.state.username + ",who is: " + this.state.age + 
          " .Notes: " + this.state.textMessage + ". Country:" + this.state.countrySelected);

  }

  render(){

        let header = (this.state.username.length > 0) ? <h1>Hello {this.state.username}</h1> : "";
        let errorMessage = this.state.errorMessage;

        return (
            <div style={{width: "100%"}}>
            <form>
            {header}
            <div style={{width: "25%", float: "left"}}>
            <p>Enter your name:</p>
            <input type="text" name='username' onChange={this.inputChangeHandler} />
            </div>
            <div style={{width: "25%", float: "left"}}>
            <p>Enter your age:</p>
            <input type='text' name='age' onChange={this.inputChangeHandler} />
            </div>
            <div style={{width: "25%", float: "left"}}>
            <p>Notes:</p>
            <input type='textarea' name='textMessage' onChange={this.inputChangeHandler} />
            </div>
            <div style={{width: "25%", float: "left"}}>
            <p>Country of residence:</p>
            <select value={this.state.countrySelected} name="countrySelected" onChange={this.inputChangeHandler} >
                <option value="Spain">Spain</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
            </select>
            </div>
            <div style={{width: "100%", float: "left", marginTop: "2%"}}>
            <input id="btnSubmit" className="btnAction" type="button" value="Submit Form" onClick={this.inputSubmitHandler} />
            </div>
            </form>
            <span style={{color: "red", marginTop: "5%"}}>{errorMessage}</span>
            </div>
            
        );
    } 
  }

export default MyForm;