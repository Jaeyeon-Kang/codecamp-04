//1.문자

function getString(arg: string): string {
  return arg;
}
const result1 = getString("철수");

//
//
//2. 숫자
function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(8);

//
//
//3. 모두(any)
function getAny(arg: any): any {
  return arg;
}
const result31 = getAny(8);
const result32 = getAny("안녕하세요");
const result33 = getAny(true);

//
//
//4. 모두(generic)
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const result41 = getGeneric(8);
const result42 = getGeneric("안녕하세요");
const result43 = getGeneric(true);

//
//
//5. 모두(generic)-응용
function getReverse(arg1: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg1];
}
const result51 = getReverse("철수", "다람쥐초등학교", 8);
const result52 = getReverse(13, "영희", "토끼초등학교");
const result53 = getReverse(100, 200, "토끼초등학교");

//
//
//6. 모두(generic)-응용
//prettier-ignore
function getReverseType<MyType1,MyType2,MyType3>(arg1:MyType1,arg2:MyType2,arg3:MyType3):[MyType3,MyType2,MyType1]{
    return [arg3,arg2,arg1]
}
const result61 = getReverse("철수", "다람쥐초등학교", 8);
const result62 = getReverse(13, "영희", "토끼초등학교");
const result63 = getReverse(100, 200, "토끼초등학교");

//
//
//7. 모두(generic)-축약
//prettier-ignore
function getReverseT< T1,T2,T3>(arg1:T1,arg2:T2,arg3:T3):[T3,T2,T1]{
    return [arg3,arg2,arg1]
}
const result71 = getReverse("철수", "다람쥐초등학교", 8);
const result72 = getReverse(13, "영희", "토끼초등학교");
const result73 = getReverse(100, 200, "토끼초등학교");

//
//
//7. 모두(generic)-축약
//prettier-ignore
function getReverseTUV< T,U,V>(arg1:T,arg2:U,arg3:V):[V,U,T]{
    return [arg3,arg2,arg1]
}
const result81 = getReverse("철수", "다람쥐초등학교", 8);
const result82 = getReverse(13, "영희", "토끼초등학교");
const result83 = getReverse(100, 200, "토끼초등학교");
