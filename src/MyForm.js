import React from 'react';


class MyForm extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

        return (
            <form>
            <h1>Hello user</h1>
            <p>Enter your name:</p>
            <input type="text" />
            </form>
        );
    } 
  }

export default MyForm;