import AAA from "./Presenter"; //  AAA  ==>  withAuth(Presenter)

const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      <AAA aaa={"철수"} />
    </>
  );
};

export default Container;

//
//                      function 이름은상관없음(props){
//                          return <Presenter {...props} />
//                      }
//
//
// (withAuth(Presenter))({aaa: "철수"})  ==>  (이름은상관없음)({aaa: "철수"})
//
//                                           ==>  <Presenter {...props} />
