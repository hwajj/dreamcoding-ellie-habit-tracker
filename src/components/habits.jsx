/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecreament = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncreament}
            onDecrement={this.handleDecreament}
            onDelete={this.handleDelete}
          ></Habit>
        ))}
      </ul>
    );
  }
}

export default Habits;
