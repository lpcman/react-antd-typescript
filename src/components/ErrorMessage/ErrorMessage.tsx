import * as React from 'react';
import './ErrorMessage.less';

export interface IErrorMessage {
  error: string
}

function ErrorMessage (props: IErrorMessage) {
  return (
    <div className='ErrorMessage'>
      <p className='ErrorMessage__content'>
        {props.error}
      </p>
    </div>
  )
}

export default ErrorMessage;
