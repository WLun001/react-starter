import React, {Component} from 'react';
import {CalculatorModel} from './Calculator';

const scaleNames: { [key: string]: string } = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export interface Scale {
  scale: string;
}

class TemperatureInput extends Component<Scale, CalculatorModel> {
  constructor(props: Scale) {
    super(props);
    this.state = {temperature: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.setState({temperature: e.target.value})
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature} onChange={this.handleChange}/>
        </fieldset>
    );
  }
}

export default TemperatureInput;
