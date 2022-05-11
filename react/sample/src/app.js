import React from "react";

const name = "Shinnosuke"

export function App() {
  return (
    <div>
      <Welcome name="Shinnosuke" />
    </div>
  )
}

const Welcome = (props) =>{
  return <h1>Hello, {props.name}</h1>
}

export class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () =>this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>Hello Japan</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}

export class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState((prevState => ({
      isToggleOn : !prevState.isToggleOn
    })));
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}