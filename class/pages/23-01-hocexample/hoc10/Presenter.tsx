function withAuth(Component) {
  return function 이름은상관없음(props) {
    return <Component {...props} />;
  };
}

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);
