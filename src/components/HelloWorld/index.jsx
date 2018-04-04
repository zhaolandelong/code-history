import React from 'react';
import { formatDate } from 'util/index';
import logo from 'assets/logo.jpg';
import './index.less';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
    };
  }

  onShowTxt() {
    this.setState({
      txt: 'Hello World',
    });
  }

  render() {
    return (
      <div className="hlwd">
        <img src={logo} alt="logo" />
        <p className="hlwd-note">When you click the btn, the time will change!</p>
        <p>Because function render will be called.Think it deeply to understand it!</p>
        <h1>{formatDate(new Date())}</h1>
        <button onClick={() => this.onShowTxt()}>Show Hello World</button>
        <p>{this.state.txt}</p>
      </div>);
  }
}
