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

  handleAC() {
    alert(`ac was clicked`);
  }

  handleCE() {
    alert(`ce was clicked`);
  }

  handleClick(event) {
    var { result, accumulator } = this.state;
    var text = event.target.textContent;
    var symbols = ["−", "+", "×", "÷"];

    if (text.match(/\d/g)) {
      result += text;
      accumulator += text;
    } else if (symbols.includes(text) || (text == "." && !result.includes("."))) {
      result = text;
      accumulator += text;
    }

    if (text == "=") {
      result = this.calculate();
    }

    this.setState({
      result: result,
      accumulator: accumulator
    })
  }

  calculate() {
    var accumulator = this.state.accumulator;
    var symbolsRegex = /[+,\−,÷,×]/g;
    var numbers = accumulator.split(symbolsRegex);
    var symbols = accumulator.match(/[^\d.]+/g)
    var result = parseFloat(numbers[0]);

    for (var i = 1; i < numbers.length; i++) {
      for (var j = 0; j < symbols.length; j++) {
        var number = parseFloat(numbers[i]);
        if (symbols[j] == "+") {
          result += number;
        } else if (symbols[j] == "−") {
          result -= number;
        } else if (symbols[j] == "÷") {
          result /= number;
        } else if (symbols[j] == "×") {
          result *= number;
        }
        symbols.shift();
        break;
      }
    }
    return parseFloat(result.toFixed(9));
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
