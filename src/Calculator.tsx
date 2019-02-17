import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';

export interface CalculatorModel {
  temperature: string;
}

function BoilingVerdict(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends Component<any, CalculatorModel> {
  constructor(props: any) {
    super(props);
    this.state = {temperature: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    console.log('handleChange()');
    this.setState({temperature: e.target.value})
  }

  render() {
    console.log('render()');
    const temperature = this.state.temperature;
    return (
        <div>
          <TemperatureInput scale="c"/>
          <TemperatureInput scale="f"/>
          <BoilingVerdict celsius={parseFloat(temperature)}/>
        </div>
    );
  }
}

export default Calculator;
