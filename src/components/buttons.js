import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div onClick={this.props.onClick} class="buttons" id="rowOneButtons">
          <div>AC</div>
          <div>CE</div>
          <div>&divide;</div>
          <div>&times;</div>
        </div>

        <div onClick={this.props.onClick} class="buttons" id="rowTwoButtons">
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>&minus;</div>
        </div>

        <div onClick={this.props.onClick} class="buttons" id="rowThreeButtons">
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>+</div>
        </div>

        <div id="lastTwoRows">
          <div onClick={this.props.onClick} class="buttons" id="rowFourButtons">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          <div onClick={this.props.onClick} class="buttons" id="rowFiveButtons">
            <div id="zero">0</div>
            <div>.</div>
          </div>
        </div>

        <div id="equals">=</div>
      </div>
    );
  }
}

export default Buttons;
