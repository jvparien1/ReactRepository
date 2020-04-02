import React from 'react';
import logo from './logo.svg';
import Car from './Car.js';
import MyForm from './MyForm.js';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {show: true}
  }

  shoot = (a, b) =>{
    alert(a + " by event: " + b);
  }

  deleteComponent = (a,b) => {
    if (this.state.show){
    this.setState({show: false});
    //   this.state.show = false;
    document.getElementById("btnDelete").innerText = "Show content again";
    this.shoot(a, b);
    
    }
    else{
      this.setState({show: true});
    //   this.state.show = false;
    document.getElementById("btnDelete").innerText = "Delete content again";

    }

  }

  render() {

    let myChildComponent;

    if (this.state.show)
    {
      myChildComponent = <Car  />;
    }

    return (
      <div>
      <div className="App">
        <h1>This is my first test</h1>
          {myChildComponent}
          <button id="btnDelete" type="button" onClick={() => this.deleteComponent("Javier", "click")} >Delete list</button>
      </div>
      
      <div style={{marginTop : '5%'}}>
        <MyForm />
      </div>
      </div>
    );
    
  }
}

export default App;
