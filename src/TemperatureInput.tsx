import React, {Component} from 'react';
import {CalculatorModel} from './Calculator';

const scaleNames: { [key: string]: string } = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component<CalculatorModel, CalculatorModel> {
  constructor(props: CalculatorModel) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
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
