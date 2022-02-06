import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
// import Searchbars02Container from "../../../commons/searchbars/02/Searchbars02.container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-next-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { currentSlide, style, onClick } = props;
    if (currentSlide === 0) {
      return null;
    } else {
      return (
        <div
          className="slick-before-arrow"
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }
  };

  const settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper>
     
        </S.SearchWrapper>
        <S.TitleWrapper> Popular Posts</S.TitleWrapper>
      <S.SliderWrapper>
        <Slider {...settings}>
          {props.bestData?.fetchBoardsOfTheBest.map((el: any) => (
            <S.BestCommentWrapper key={el._id}>
               {el.images?.[0] ? (
              <S.BestCommentImage 
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
              onClick={props.onClickMoveToBoardDetail}
              id={el._id}
              />
              ) : (
                <S.BestCommentImage2 onClick={props.onClickMoveToBoardDetail} />
              )}
              <S.BestCommentTitle
                id={el._id}
              >
                {el.title
                  .replaceAll(props.keyword, `@#$%{props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el: any) => (
                    <S.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.TextToken>
                  ))}
              </S.BestCommentTitle>
              <S.BestCommentImageIcon></S.BestCommentImageIcon>

              <S.BestIconToCount>
                <S.BestCommentLikeIcon src="/images/boardComment/list/like.png" />
                <S.BestCommentLikeCount>{el.likeCount}</S.BestCommentLikeCount>
              </S.BestIconToCount>
            </S.BestCommentWrapper>
          ))}

          {/* {new Array(5).fill(1).map((el) => (
            <S.BestCommentImage key={uuidv4()} src="/images/landing/banner01.png" />
          ))} */}
        </Slider>

      </S.SliderWrapper>

      <S.TitleWrapper> All Posts
      <S.RoundDiv>
          <S.RoundDivInnerText
            placeholder="search"
            onChange={props.onChangeSearch}
          />
          <S.RoundDivCircle>
            <S.RoundDivInnerIcon
              src="/images/landing/searchicon01.png"
              
            />
          </S.RoundDivCircle>
        </S.RoundDiv>
      </S.TitleWrapper>
      
      <S.TableTop />
      
      <S.Row>
        <S.ColumnHeaderBasic>Number</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>Title</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>Writer</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>Created At</S.ColumnHeaderBasic>
      </S.Row>
      {!props.isSearch && (
        <>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.writer}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          ))}
        </>
      )}
      {/* {props.isSearch && (
        <>
          {props.searchData?.fetchBoards?.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetailstartPage}
              >
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.writer}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          ))}
        </>
      )} */}
      <S.TableBottom />
      <S.PageNation>
        <S.NextPage onClick={props.onClickPrevPage}>이전페이지</S.NextPage>

        {new Array(10).fill(1).map((_, index) => (
          <span
            key={uuidv4()}
            onClick={props.onClickPage}
            id={String(index + 1)}
            style={{ width: "1.1%" }}
          >
            {index + 1}
          </span>
        ))}
        <S.NextPage onClick={props.onClickNextPage}>다음페이지</S.NextPage>
      </S.PageNation>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
