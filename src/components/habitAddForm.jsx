import React, { PureComponent } from 'react';
//habitAddForm은 state따로 없고 onAdd를 props로 받는다
//app에서 전달된 HandleAdd는 클래스 한번 만들어질때 할당된 뒤로 다시업데이트 되지 않는 함수
//~ 리렌더 되지 않음 ~
class HabitAddForm extends PureComponent {
  //PureComponent 얕은비교해서 바뀌면 리렌더
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value= '';
    //둘중 하나
    this.formRef.current.reset();
  };

  render() {
    console.log('habitAddForm');
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='Habit'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
