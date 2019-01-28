import React, {Component} from 'react';
interface AuthState {
  isLoggedIn: boolean;
}
export function UserGreeting(prop: any) {
  return <h1>hello</h1>;
}

export function GuestGreeting(prop: any) {
  return <h1>Please sign in</h1>;
}

class Greeting extends Component<AuthState, any> {
  render() {
    if (this.props.isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
  }
}

export default Greeting;
