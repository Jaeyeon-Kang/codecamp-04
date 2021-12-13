//클로저(함수선억식)-기초
function firstFunc(arg1: string) {
  return function secondFunc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultClosure1 = firstFunc("영희")(20);

//클로저(함수선억식)-기초(any)
function firstFunc2(arg1: string) {
  return function secondFunc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultClosure2 = firstFunc2("영희")(20);

//클로저(함수선억식)-기초(generic)
function firstFunc3<T, U>(arg1: T) {
  return function secondFunc(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const resultClosure3 = firstFunc3("영희")(20);

//클로저(화살표함수)
//prettier-ignore
const fistArrow=<T>(arg1:T)=><U>(arg2:U):[T,U]=>{
      return [arg1,arg2]
  }
const resultClosure4 = fistArrow("영희")(20);

//클로저(화살표함수)
//prettier-ignore
const fistArrow2=<C,P extends{aaa:string}>(component:C)=><U>(props:P)=>{
  
    return [component,props]
}
const resultClosure5 = fistArrow2("Presenter")({ aaa: "철수" });
