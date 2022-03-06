/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  //container
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'coding', count: 0 },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit}></Habit>
        ))}
      </ul>
    );
  }
}

export default Habits;
