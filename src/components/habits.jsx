/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

//app.jsx에서 새로운 habits를 만들어 업데이트한다.
//그러면 Habits가 PureComponent이든 아니든 state의 habits가 변하니까 무조건 업데이트된다
//그러니까 굳이 PureComponent가 아니어도 됨
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

  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncreament}
              onDecrement={this.handleDecreament}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            ></Habit>
          ))}
        </ul>
        <button className='habits-reset' onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
