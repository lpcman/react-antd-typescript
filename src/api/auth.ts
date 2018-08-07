import io from './index';

export function login(payload: any) {
  return io.get(process.env.REACT_APP_API + '/5b6954673200008b00af5b32', payload);
}
