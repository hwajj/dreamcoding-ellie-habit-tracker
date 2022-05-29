import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'coding', count: 0 },
    ],
  };
  handleIncreament = (habit) => {
    ////같은 객체를 참조함
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++; //habit의 count만 증가
    //// console.log(this.state.habits);
    //// console.log(habits);
    // this.setState({ habits: habits }); //기존객체를 업데이트

    //아예 새로운 객체 만듦=
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    // console.log(this.state.habits);
    // console.log(habits);
    this.setState({ habits }); //새로운객체를 업데이트
    //pureComponent는 state의 참조값이 변하지 않으면 render안됨~ 새로운 참조값의 객체 생성해서 넘겨줘야함
  };

  handleDecreament = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count; //객체 직접수정(bad)~ 나중에 고쳐야함
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // const index = habits.indexOf(habit);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncreament}
          onDecrement={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
