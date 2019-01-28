import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import {Mailbox} from './Mailbox';
import {NumberList} from './List';

class App extends Component {
  message = [1, 2, 3, 4];
  render() {
    return (
        <div className="App">
          <Toggle />
          <Clock toggle={true} date={new Date()}/>
          <LoginControl />
          <header className="App-header">
            <Mailbox unreadMessage={this.message} />
            <NumberList numbers={this.message} />
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}
// todo: stop here https://reactjs.org/docs/forms.html
export default App;
