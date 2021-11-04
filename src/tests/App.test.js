import { fireEvent, render } from '@testing-library/react';
import { add } from 'lodash';
import App from '../App';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
  });

  it('should be able to add number', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('add');
    const equals = container.getByTestId('equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('5');
  });

  it('should be able to subtract a number', () => {
    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const subtract = container.getByTestId('subtract');
    const equals = container.getByTestId('equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button3);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('4');
  });
  
  it('should be able to multiply', () => {
    const button5 = container.getByTestId('number5');
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('multiply');
    const equals = container.getByTestId('equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    fireEvent.click(multiply);
    fireEvent.click(button3);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('15');
  });
  
  it('should be able to multiply', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('divide');
    const equals = container.getByTestId('equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');
  });
  
  it('should be able to concatenate', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal).toHaveTextContent('217');
  });

  it('should be able to multiply', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('divide');
    const multiply = container.getByTestId('multiply');
    const equals = container.getByTestId('equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    fireEvent.click(multiply)
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('6');
  });


})

