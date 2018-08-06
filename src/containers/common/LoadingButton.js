import * as React from 'react'
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator'

function LoadingButton (props) {
  return (
    <a href='#' className={props.className + ' btn btn--loading'} disabled='true'>
      <LoadingIndicator />
    </a>
  )
}

LoadingButton.propTypes = {
  className: PropTypes.string
}

export default LoadingButton
