/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  //container
  //데이터를 가지는 곳
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'coding', count: 0 },
    ],
  };
  handleIncreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    //    this.setState({habits:habits});
    this.setState({ habits });
  };
  handleDecreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    const index = habits.indexOf(habit);

    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
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
