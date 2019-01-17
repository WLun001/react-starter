import React, {Component} from 'react';

interface DateTime {
  date: Date
}

class Clock extends Component<DateTime, DateTime> {

  timer: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(): void {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <div>
          <h4>props : {this.props.date.toLocaleString()}</h4>
          <h4>state: {this.state.date.toLocaleString()}</h4>
        </div>
    );
  }
}

// todo: stop here https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
export default Clock;