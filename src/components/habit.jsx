import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncreament = () => {
    console.log('hihih~~~');
    //setState 호출해줘야 리액트가 부분적으로 업데이트 할 수 있다ㄴ
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecreament = () => {
    console.log('hihihi');
    const count = this.state.count - 1;
    console.log(this.state.count);
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <li className='habit'>
        <span className='habit-name'>reading</span>
        <span className='habit-count'>{this.state.count}</span>
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
        <button className='habit-button habit-delete'>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
