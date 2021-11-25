import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}
export default class MyCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}

// 기존에 함수형 컴포넌트 만들때는 setWriter, setTitle 등 전부 따로따로 만들었음. 그런데 지난시간에 이것들을 전부 하나의 객체로 묶었었음. state는 기본이 객체로, state={}열어 중괄호 안에 내용을 집어넣음.
// setstate는 Component안에 있는 것
// state, onClickCounter등을 받아서 함수형처럼 쓰려면 this.~ 라고 써야함. 앞에 this 붙여야 함.
//   < onClick={this.onClickCounter.bind(this)}>여기서 bind(this)는 onClickCounter라는 함수를 지칭하게 해서 다른 것을 지목하는 오류가 없도록 하기 위함
// 그렇다면 의문... 왜 component라는 것을 배워야하는가?
// count:0 은...뭐임? 함수는 뭐임? 기존의 [state,setState]=useState랑 뭐가 다름?
