import React, {Component} from 'react';

interface State {
  toggle: boolean;
}

class Toggle extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {toggle: true};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }

  render() {
    return (
        <button onClick={this.handleClick}>
          {this.state.toggle ? 'On' : 'Off'}
        </button>
    );
  }
}

export default Toggle;
