import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Screen extends Component {
  render() {
    return (
      <div>
        <div id="screen">
          <div id="result">result</div>
          <div id="accumulator">accumulator</div>
        </div>
      </div>
    );
  }
}

export default Screen;
