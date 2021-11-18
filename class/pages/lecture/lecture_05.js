// 폴더 구조 체계화
// Optional Chaining vs nullish-coalesing
// Optional chanining 
// data?.fetchProfile(= data && fetchProfile) -> 있으면 보여준다.(그리고), 앞에가 참일 때 뒤의 내용을 보여줘
// data || data.fetchProfile -> 없으면 보여준다.(또는), 앞에가 거짓(0, '', false도 포함)이면 뒤의 것을 디폴트 모습으로 보여줘

// 거짓?
// 거짓 표현법 : 0, '', false., null(개발자가 강제로 비워줄 때 사용), undefined(원래 비워있는 상태), NaN

// nullish-coalesing
// data ?? data.fetchProfile -> null 과 undefined일 때만 뒤의 내용을 보여줘, 앞의 내용이 비어있는 거짓일때만 뒤의 내용을 보여줘

// 폴더 구조 체계화
// Container / Presenter 패턴
// 아토믹 디자인 패턴
// Container = 기능 부분(자바스크립트) / Persenter = 보여지는 부분(html(JSX))
// Container 에서 Presenter을 import 해주고 return 부분에 Persenter 함수를 적어주면 하나로 합쳐져서 실행이 된다.
// Container 는 불러오는 부분으로 부모 컴포넌트(Component)가 되고 Presenter는 불려 오는 부분으로 자식컴포넌트(Component)가 된다.

// props
// key 값과 value 값으로 객체화를 해서  Presenter 에 props를 넣어주고 key값을 넣어주면 된다.

// 
