import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'
import PropTypes from 'prop-types';

import {registerRequest} from '../actions/authAction'

class Register extends Component {
  constructor (props) {
    super(props)

    this._register = this._register.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, currentlySending, error} = this.props.data

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Register</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register} btnText={'Register'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({username, password}))
  }
}

Register.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

function select (state) {
  return {
    data: state.auth
  }
}

export default connect(select)(Register)
