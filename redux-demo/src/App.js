import React, { Component } from 'react';
import { connect } from 'react-redux';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h4>{this.props.msg}</h4>
        <Persons />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      msg: state.message
  };
};

export default connect(mapStateToProps)(App);
