// map VS Filter
// 1. map
// const classmates = ["철수", "영희", "훈이"]
// classmates.map((el) => el + "어린이")            el = element
// (3) ["철수어린이", "영희어린이", "훈이어린이"]
// map을 적용하게 되면 각각의 요소에 동일하게 적용을 하겠다.(for문보다 효율적으로 사용할 수 있다.)

// const classmates = [
//           {name : "철수"},
//           {name : "영희"}, 
//           {name:  "훈이"}
//  ]
// classmates.map((el) => ({name : "${el.name}어린이"}))
// el.name 이 철수에 해당한다.
// 

//const classmates = [
//           {name : "철수"},
//           {name : "영희"}, 
//           {name:  "훈이"}
//  ]
// classmates.map((el) => ({ name : el.name, school: "다람쥐초등학교"}))
// [{name : "철수", school: "다람쥐초등학교"}]
// [{name : "영희", school: "다람쥐초등학교"}]
// [{name : "훈이", school: "다람쥐초등학교"}]
// 위의 중괄호는 함수의 중괄호이다. 객체의 중괄호가 아니다
// 그것을 둘러싼 괄호는 return을 생략한 괄호가 된다.

// const classmates = ["철수", "영희", "훈이"]
// const aaa = classmates.map((el) => <div>{el}</div>)
// const aaa  = <div>철수</div>, <div>철수</div>, <div>철수</div>
// return <div>{aaa}</div>
// 결과
//<div>
// <div>철수</div>
// <div>영희</div>
// <div>훈이</div>
//</div>


// Filter
// const ages = [10, 13, 11]
// ages.filter((el) => (el >= 11))
//  - [13, 11]
//const classmates = [
//           {name : "철수"},
//           {name : "영희"}, 
//           {name:  "훈이"}
//  ]
// classmates.filter((el) => (el.age >= 11))


//const classmates = [
//   {name :"철수", age:10, school:"토끼초등학교"},
//   {name :"영희", age:13, school:"다람쥐초등학교"},
//   {name :"훈이", age:11, school:"토끼초등학교"}
//]
//  classmates.filter((el) => (el.age === 11))
//      {name: '훈이', age: 11, school: '토끼초등학교'}
//  classmates.filter((el) => (el.name === "영희"))
//      {name: '영희', age: 13, school: '다람쥐초등학교'}
//  classmates.filter((el) => (el.school === "토끼초등학교"))
//      {name: '철수', age: 10, school: '토끼초등학교'}
//      {name: '훈이', age: 11, school: '토끼초등학교'}

// 함수의 인자에 함수가 들어가는 함수를 call back 함수라고 한다.

// const classmates = [
//     {name :"철수", age:10},
//     {name :"영희", age:13},
//     {name :"훈이", age:11}
// ]
// classmates
//          .filter((el) => (el.age >= 11))
//          .map((el) => ({name: el.name, age: el.age, school:"다람쥐초등학교"}))
// [
    // {name :"철수", age:10, school:"다람쥐초등학교"}
    // {name :"훈이", age:11, school:"다람쥐초등학교"}
// ]

