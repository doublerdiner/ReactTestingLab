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
    const add = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
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
    const subtract = container.getByTestId("operator-subtract");
    const button4 = container.getByTestId("number4");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

// calculator.multiply() - multiply 3 by 5 and get 15
  it("should be able to multiply two numbers and display the result", ()=>{
    const button3 = container.getByTestId("number3");
    const multiply = container.getByTestId("operator-multiply");
    const button5 = container.getByTestId("number5");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

// calculator.divide() - divide 21 by 7 and get 3
  it("should be able to divide two numbers and display the result", ()=>{
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const divide = container.getByTestId("operator-divide");
    const button7 = container.getByTestId("number7");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })
  
  // calculator.numberClick() - concatenate multiple number button clicks
  it("should be able to concatenate multiple number button clicks", ()=>{
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button8 = container.getByTestId("number8");
    const button9 = container.getByTestId("number9");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button8);
    fireEvent.click(button9);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('2189');
    
  })

// calculator.operatorClick() - chain multiple operations together
  it("should be able to chain multiple operations together", ()=>{
    const button2 = container.getByTestId("number2");
    const add = container.getByTestId("operator-add");
    const button1 = container.getByTestId("number1");
    const multiply = container.getByTestId("operator-multiply");
    const button8 = container.getByTestId("number8");
    const subtract = container.getByTestId("operator-subtract");
    const button9 = container.getByTestId("number9");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(multiply);
    fireEvent.click(button8);
    fireEvent.click(subtract);
    fireEvent.click(button9);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

// calculator.clearClick() - clear the running total without affecting the calculation
  it("should be able to clear the running total without affecting the calculation", ()=>{
    const button5 = container.getByTestId("number5");
    const multiply = container.getByTestId("operator-multiply");
    const button7 = container.getByTestId("number7");
    const equals = container.getByTestId("operator-equals");
    const add = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const clear = container.getByTestId("clear");
    fireEvent.click(button5);
    fireEvent.click(multiply);
    fireEvent.click(button7);
    fireEvent.click(equals);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(clear);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('35');
  })
})

