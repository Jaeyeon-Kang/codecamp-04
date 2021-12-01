const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      {Presenter({ aaa: "철수" })}
    </>
  );
};

function withAuth(Component) {
  return function 이름은상관없음(props) {
    return Component;
  };
}

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default Container;

//  withAuth(Component)     ==>   이름은상관없음
// (withAuth(Component))()  ==>  (이름은상관없음)()  ==>  Component

// (withAuth(Presenter))()  ==>  (이름은상관없음)()  ==>  Presenter
