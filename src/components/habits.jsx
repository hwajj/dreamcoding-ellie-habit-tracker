/* eslint-disable no-unreachable */
import React, { Component } from 'react';

class Habits extends Component {
  state = {
    habits: [
      { name: 'Reading', count: 0 },
      { name: 'Running', count: 0 },
      { name: 'coding', count: 0 },
    ],
  };

  render() {
    return <ul></ul>;
  }
}

export default Habits;
