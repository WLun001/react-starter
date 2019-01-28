import React, {Component} from 'react';
import Greeting from './Greeting';

function LoginButton(props: { click: () => void }) {
  return (
      <button onClick={props.click}>
        Login
      </button>
  );
}

function LogoutButton(props: { click: () => void }) {
  return (
      <button onClick={props.click}>
        Logout
      </button>
  );
}

class LoginControl extends Component<any, { isLoggedIn: boolean }> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton click={this.handleLogoutClick}/>;
    } else {
      button = <LoginButton click={this.handleLoginClick} />
    }
    return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
    );
  }
}

export default LoginControl;
