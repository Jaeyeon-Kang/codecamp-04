const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      {Presenter({ aaa: "철수" })}
    </>
  );
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default Container;
