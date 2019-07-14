import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fellowNames: [
        "Michael",
        "Sihame",
        "Amine",
        "Voniel",
        "Hupaul",
        "Elisandra",
        "Sergio",
        "Shayna",
        "Johanne",
        "Jonathan",
        "Peter",
        "Dantae",
        "Deja",
        "Aransa",
        "Suzette",
        "Pearl",
        "Camille",
        "Owen",
        "Sharrar",
        "Douglas",
        "Savita",
        "Briahana",
        "Kameron",
        "Karen",
        "Jenesh",
        "Chukwuka",
        "Joseph",
        "Kathy",
        "Ohidur",
        "Stephanie",
        "Ariel",
        "Renee",
        "Giselle",
        "Briany",
        "Malik",
        "Kadijah"
      ],
      display: ""
    };
  }

  buttonClick = (e) => {
    e.preventDefault()
    let randomIndex = Math.floor(Math.random() * this.state.fellowNames.length)
    this.setState({
      display: this.state.fellowNames[randomIndex]
    })
  }

  render() {
    return (
      <div className="mainDiv">
        <button className="randomButton" onClick={this.buttonClick}>Pick your "volunteer"</button>
        <h1 className="nameText">{this.state.display}</h1>
      </div>
    );
  }
}

export default App;
