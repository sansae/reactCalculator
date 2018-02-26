import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="buttons" id="rowOneButtons">
          <div onClick={this.props.onClick}>AC</div>
          <div onClick={this.props.onClick}>CE</div>
          <div onClick={this.props.onClick}>&divide;</div>
          <div onClick={this.props.onClick}>&times;</div>
        </div>

        <div class="buttons" id="rowTwoButtons">
          <div onClick={this.props.onClick}>7</div>
          <div onClick={this.props.onClick}>8</div>
          <div onClick={this.props.onClick}>9</div>
          <div onClick={this.props.onClick}>&minus;</div>
        </div>

        <div class="buttons" id="rowThreeButtons">
          <div onClick={this.props.onClick}>4</div>
          <div onClick={this.props.onClick}>5</div>
          <div onClick={this.props.onClick}>6</div>
          <div onClick={this.props.onClick}>+</div>
        </div>

        <div id="lastTwoRows">
          <div class="buttons" id="rowFourButtons">
            <div onClick={this.props.onClick}>1</div>
            <div onClick={this.props.onClick}>2</div>
            <div onClick={this.props.onClick}>3</div>
          </div>

          <div class="buttons" id="rowFiveButtons">
            <div onClick={this.props.onClick} id="zero">0</div>
            <div onClick={this.props.onClick}>.</div>
          </div>
        </div>

        <div onClick={this.props.onClick} id="equals">=</div>
      </div>
    );
  }
}

export default Buttons;
