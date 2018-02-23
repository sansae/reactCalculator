import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Buttons extends Component {
  render() {
    return (
      <div>
        <div class="buttons" id="rowOneButtons">
          <div id="ac">AC</div>
          <div id="ce">CE</div>
          <div id="divide">&divide;</div>
          <div id="times">&times;</div>
        </div>

        <div class="buttons" id="rowTwoButtons">
          <div id="7">7</div>
          <div id="8">8</div>
          <div id="9">9</div>
          <div id="minus">&minus;</div>
        </div>

        <div class="buttons" id="rowThreeButtons">
          <div id="4">4</div>
          <div id="5">5</div>
          <div id="6">6</div>
          <div id="plus">+</div>
        </div>

        <div id="lastTwoRows">
          <div class="buttons" id="rowFourButtons">
            <div id="1">1</div>
            <div id="2">2</div>
            <div id="3">3</div>
          </div>

          <div class="buttons" id="rowFiveButtons">
            <div id="zero">0</div>
            <div id="dot">.</div>
          </div>
        </div>

        <div id="equals">=</div>
      </div>
    );
  }
}

export default Buttons;
