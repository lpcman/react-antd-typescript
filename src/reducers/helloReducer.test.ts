import * as Actions from '../actions/helloAction';
import { IHello } from "../store/helloStore";
import { enthusiasm } from './helloReducer';

const Mock: IHello =  {
    enthusiasmLevel: 1,
    languageName: 'Typescript'
};

it('increment the correct enthusiasm level', () => {
    const enthusiasmIncrement = enthusiasm(Mock, Actions.incrementEnthusiasm());
    expect(enthusiasmIncrement.enthusiasmLevel).toEqual(2);
});

it('decrement the correct enthusiasm level of 1', () => {
    const enthusiasmDecrement = enthusiasm(Mock, Actions.decrementEnthusiasm());
    expect(enthusiasmDecrement.enthusiasmLevel).toEqual(1);
});
