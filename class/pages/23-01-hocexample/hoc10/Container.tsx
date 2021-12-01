import AAA from "./Presenter"; //  AAA  ==>  withAuth(Presenter)

const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      {AAA({ aaa: "철수" })}
    </>
  );
};

export default Container;

//
//                      function 이름은상관없음(aaa){

//                                  권한체크, 인증 다른화면으로 넘기기 등의 로직이 사용가능

//                          return <Presenter {...aaa} />
//                      }
//
//
// (withAuth(Presenter))({aaa: "철수"})  ==>  (이름은상관없음)({aaa: "철수"})
//
//                                           ==>  <Presenter {...props} />
