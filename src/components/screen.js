import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="screen">
          <div id="result">{this.props.result}</div>
          <div id="accumulator">{this.props.accumulator}</div>
        </div>
      </div>
    );
  }
}

export default Screen;
