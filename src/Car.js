import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: "Chrysler",
            model: "Sebring",
            year: 2008,
            color: "Silver"
        };
    }

    changeColor = () =>{
        // this.state.color = "Blue";
        this.setState({color:"Blue"});

    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({color: "yellow"})
        }, 2000)
      }


      getSnapshotBeforeUpdare(prevProps, prevState){
        document.getElementById("oldP").innerText = prevState.color;
      }  

    componentDidUpdate(){
        document.getElementById("myP").innerText = this.state.color;
    }
    render() {


      return (
        <div style={{marginLeft : '5%'}} >
            <h2>My car information as follows:</h2>
            
            <ul>
                <li>Car Make: {this.state.make}</li>
                <li>Car Model and Year of Car: {this.state.model} {this.state.year}</li>
                <li>Car Color Details: {this.state.color}</li>
            </ul>
            <button type="button" onClick={this.changeColor} >Click and Change Color of car</button>
            <p id="oldP"></p>
            <p id="myP"></p>
        </div>
        );
    }

}

export default Car;