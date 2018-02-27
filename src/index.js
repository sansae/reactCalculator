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

  handleCE() {
    return this.state.result = "hi";
  }

  getLastNumber(accum) {
    var accumArr = accum.split("");
    var lastNumber = [];
    for (var i = accumArr.length - 1; i >= 0; i--) {
      if (!symbols.includes(accum[i])) {
        lastNumber.unshift(accum[i]);
      } else {
        break;
      }
    }
    return lastNumber.join("");
  };

  handleClick(event) {
    var { result, accumulator } = this.state;
    var text = event.target.textContent;
    var symbols = ["−", "+", "×", "÷"];
    var acCE = ["AC", "CE"];
    var decimalPresent = false;
    var copy = "";
    var popped = "";

    if (text.match(/\d/g) || (text == "." && !result.includes("."))) {
      result += text;
    } else if (symbols.includes(text) || (text == "." && !result.includes("."))) {
      result = text;
    }

    var lastAccumulatorElement = accumulator[accumulator.length - 1];

    var isSymbol = symbols.includes(text);
    var noSymbol = !symbols.includes(lastAccumulatorElement);
    var accumulatorNotEmpty = accumulator != "";

    if (isSymbol && noSymbol && accumulatorNotEmpty) {
      if (lastAccumulatorElement == ".") {
        accumulator = "";
      } else {
        accumulator += text;
        decimalPresent = false;
      }
    } else if (text.match(/\d/g)) {
      accumulator += text;
    } else if (result[result.length - 1] == "." && !decimalPresent && !acCE.includes(text)) {
      decimalPresent = true;
      if (lastAccumulatorElement != ".") {
        accumulator += text;
      }
    }

    if (text == "=" && accumulator != "") {
      result = this.calculate();
      accumulator = this.calculate();
    } else if (text == "AC") {
      result = "";
      accumulator = "";
    } else if (text == "CE") {
      result = result.slice(0, -1);
      if (accumulator != "") {
        copy = JSON.parse(JSON.stringify(accumulator));
        copy = copy.split("");
        popped = copy.pop();
        if (popped == ".") {
          decimalPresent = false;
        }

        accumulator = accumulator.slice(0, -1);
        if (symbols.includes(popped)) {
          result = this.getLastNumber(accumulator);
          if (result.includes(".")) {
            decimalPresent = true;
          }
        }
      // $("#accumulator").text(accumulator);
      }
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
