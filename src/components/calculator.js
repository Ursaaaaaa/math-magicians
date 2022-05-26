import React from 'react';
import './calc.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="displayInputs">022555</div>
        <div className="calcDiv">
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn btnaction">&#247;</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn btnaction">&#215;</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn btnaction">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn btnaction">+</button>
          <button type="button" className="btnZero">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn btnaction">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
