import * as React from 'react';
import './Hello.less';

export interface IProps {
  name: string;
  username?: string,
  greeting?: string,
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement, username, greeting}: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  console.log("render"); // tslint:disable-line
  console.log(username); // tslint:disable-line
  console.log(greeting); // tslint:disable-line
  return (
    <div className="Hello">
      <div className="greeting">
        Hello {username} {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        {greeting}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
