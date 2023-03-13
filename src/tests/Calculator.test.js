import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

// calculator.add() - add 1 to 4 and get 5
  it("should be able to add two numbers and display the result", ()=>{
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const add = container.getByTestId("operator-add");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

// calculator.subtract() subtract 4 from 7 and get 3
  it("should be able to subtract two numbers and display the result", ()=>{
    const button7 = container.getByTestId("number7");
    const button4 = container.getByTestId("number4");
    const subtract = container.getByTestId("operator-subtract");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

// calculator.multiply() - multiply 3 by 5 and get 15
  xit("should be able to multiply two numbers and display the result", ()=>{

  })

// calculator.divide() - divide 21 by 7 and get 3
  xit("should be able to divide two numbers and display the result", ()=>{

  })

// calculator.numberClick() - concatenate multiple number button clicks
  xit("should be able to concatenate multiple number button clicks", ()=>{

  })
// calculator.operatorClick() - chain multiple operations together
  xit("should be able to chain multiple operations together", ()=>{

  })
// calculator.clearClick() - clear the running total without affecting the calculation
  xit("should be able to clear the running total without affecting the calculation", ()=>{

  })
})

