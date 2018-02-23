import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Screen from './components/screen';

class App extends Component {
  render() {
    return (
      <div>
        <div id="calculator-body">
          <h1 id="header">Electronic Calculator</h1>
          <Screen />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
