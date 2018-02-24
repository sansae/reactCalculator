import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Screen from './components/screen';
import Buttons from './components/buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { result: "", accumulator: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var { result, accumulator } = this.state;
    var text = event.target.textContent;
    var symbols = ["−", "+", "×", "÷"];

    if (text.match(/\d/g)) {
      this.state.result += text;
      this.state.accumulator += text;
    } else if (symbols.includes(text)) {
      this.state.result = "";
    }

    this.setState({
      result: this.state.result,
      accumulator: this.state.accumulator
    })
  }

  render() {
    return (
      <div>
        <div id="calculator-body">
          <h4 id="header">Electronic Calculator</h4>
          <Screen result={this.state.result} accumulator={this.state.accumulator}/>
          <Buttons onClick={this.handleClick} result={this.state.result} accumulator={this.state.accumulator}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
