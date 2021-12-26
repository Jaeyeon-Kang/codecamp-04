import { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <span>
      <h1>라이브러리와 비교</h1>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      <br />
      <br />
      <br />
      <h1>기본 기능만 남게 정리</h1>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
}

// ant design 의 normal Rate가져오는 거. state={value:3} 이라고 되어있는 것은 const [value, setValue]=useState(3) 처럼 가져오면 됨.

//
//
// 원래는 아래 식과 같았음.
// import { Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// class Rater extends React.Component {
//   state = {
//     value: 3,
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <span>
//         <Rate tooltips={desc} onChange={this.handleChange} value={value} />
//         {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
//       </span>
//     );
//   }
// }

// ReactDOM.render(<Rater />, mountNode);
