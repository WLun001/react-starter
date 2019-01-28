import React, {Component} from 'react';

interface DateTime {
  date: Date
}

interface Props {
  date: Date;
  toggle: boolean;
}

class Clock extends Component<Props, DateTime> {

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

export default Clock;
