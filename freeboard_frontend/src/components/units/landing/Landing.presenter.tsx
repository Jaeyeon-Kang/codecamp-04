import * as S from "./Landing.styles";
import { ILandingProps } from "./Landing.types";

const LandingPagePresenter = (props: ILandingProps) => {
  return (
    <S.Wrapper>
      <S.FirstBanner>
        <S.FirstTitle>Be wise in trading used electronic devices</S.FirstTitle>
        <S.LearnMoreToArrow onClick={props.goMarketPage}>
          <S.LearnMore>Learn More</S.LearnMore>
          <S.RightArrow src="/images/landing/rightarrow.png" />
        </S.LearnMoreToArrow>
      </S.FirstBanner>
      <S.SecondBanner>
        <S.SmallTitleTwo>15% Discounts for Student</S.SmallTitleTwo>
        <S.FirstTitleTwo>
          Prepare a gift for the new semester at Nauntium!
        </S.FirstTitleTwo>
        <S.LearnMoreToArrowTwo onClick={props.goMarketPage}>
          <S.LearnMore>Learn More</S.LearnMore>
          <S.RightArrow src="/images/landing/rightarrow.png" />
        </S.LearnMoreToArrowTwo>
      </S.SecondBanner>
      <S.ThirdToFourthBanner>
        <S.ThirdBanner></S.ThirdBanner>
        <S.FourthBanner></S.FourthBanner>
      </S.ThirdToFourthBanner>
    </S.Wrapper>
  );
};

export default LandingPagePresenter;
