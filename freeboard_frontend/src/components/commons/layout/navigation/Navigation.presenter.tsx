import { MouseEventHandler } from "react";
import { Navigation, MenuOne, MenuTwo, MenuThree } from "./Navigation.styles";

interface INavigationUI {
  onClickSubmit: () => void;
  onMoveMypage: () => void;
}

export default function NavigationUI(props: INavigationUI) {
  return (
    <Navigation>
      <MenuOne onClick={props.onClickSubmit}>자유게시판</MenuOne>
      <MenuTwo>중고마켓</MenuTwo>
      <MenuThree onClick={props.onMoveMypage}>마이페이지</MenuThree>
    </Navigation>
  );
}
