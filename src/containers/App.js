import {connect} from 'react-redux'
import React, {Component} from 'react'
import Nav from './common/Nav'
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Nav loggedIn={this.props.data.loggedIn}
          currentlySending={this.props.data.currentlySending}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.array,
  data: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
}

function select (state) {
  return {
    data: state.auth
  }
}

export default connect(select)(App)
