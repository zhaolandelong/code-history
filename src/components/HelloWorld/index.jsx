import React from 'react';
import { strReverse } from 'util';
import logo from 'assets/logo.jpg';

const STR_INPUT = 'Hello World';
const STR_HOLDER = 'The result will be here...';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: STR_HOLDER,
    };
  }

  onChangeResult(result) {
    this.setState({
      result,
    });
  }

  render() {
    return (
      <div>
        <img src={logo} alt="logo" />
        <h1>{STR_INPUT}</h1>
        <button onClick={() => this.onChangeResult(strReverse(STR_INPUT))}>{`Show the reverse of "${STR_INPUT}"`}</button>
        <button onClick={() => this.onChangeResult(STR_HOLDER)}>Do reset</button>
        <p>{this.state.result}</p>
      </div>);
  }
}
