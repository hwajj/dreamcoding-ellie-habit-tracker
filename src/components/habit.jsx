import React, { PureComponent } from 'react';

//props 안의 데이터가 변경되지 않으면 렌더함수가 호출되지않음
class Habit extends PureComponent {
  handleIncreament = (habit) => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecreament = (habit) => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    // const habitName = this.props.habit.name;

    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncreament}
        >
          <i className='fa-solid fa-square-plus'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecreament}
        >
          <i className='fa-solid fa-square-minus'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
