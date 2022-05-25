import React from 'react';
import Calculator from './components/calculator';

class RenderCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
export default RenderCalc;
