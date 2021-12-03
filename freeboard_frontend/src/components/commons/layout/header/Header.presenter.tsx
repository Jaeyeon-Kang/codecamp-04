import {
  HeaderTium,
  Rectangle,
  LogoWrapper,
  Login,
  HeaderWrapper,
  MenuWrapper,
  MenuOne,
  MenuTwo,
  MenuThree,
  LeftWrapper,
} from "./Header.styles";

export default function HeaderUI(props) {
  return (
    <>
      <HeaderWrapper>
        <LeftWrapper>
          <LogoWrapper>
            <Rectangle>nu</Rectangle>

            <HeaderTium>ntium.</HeaderTium>
          </LogoWrapper>
          <MenuWrapper>
            <MenuOne onClick={props.onClickBoard}>Freeboard</MenuOne>
            <MenuTwo onClick={props.onClickMarket}>Market</MenuTwo>
            <MenuThree onClick={props.onClickMyPage}>MyPage</MenuThree>
          </MenuWrapper>
        </LeftWrapper>
        <Login onClick={props.onClickSubmit}>Login</Login>
      </HeaderWrapper>
    </>
  );
}
