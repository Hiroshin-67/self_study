import React from "react";

const scaleName = {
  s : "selsius",
  f : "Fahrenheit"
};

const toCelsius = (fahrenheit) =>{
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
}

const tryConvert = (templeture, convert) => {
  const input = parseFloat(templeture);
  if (Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = (props) => {
  if(props.celsius >= 100){
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil</p>
}

class TempletureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.props.onTempletureChange(event.target.value);
  }
  render(){
    const templeture = this.props.templeture;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter templeture in {scaleName[scale]}:.</legend>
        <input value={templeture} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(templeture)}/>
      </fieldset>
    );
  }
}

export class Calculater extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      templeture: '',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(templeture){
    this.setState({scale: 'c', templeture});
  }
  handleFahrenheitChange(templeture){
    this.setState({scale: 'f', templeture});
  }
  render(){
    const scale = this.state.scale;
    const templeture = this.state.templeture;
    const celsius = scale === 'f' ? tryConvert(templeture, toCelsius) : templeture;
    const fahrenheit = scale === 'c' ? tryConvert(templeture, toFahrenheit) : templeture;
    return(
      <div>
        <TempletureInput 
        scale="c"
        templeture={celsius}
        onTempletureChange={this.handleCelsiusChange} />
        <TempletureInput 
        scale="f"
        templeture={fahrenheit}
        onTempletureChange={this.handleFahrenheitChange}
         />
         <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}