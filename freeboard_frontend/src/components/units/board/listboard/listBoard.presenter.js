import { getDate } from "../../../../commons/libraries/utils";
import {
  Row,
  Column,
  FullWrapper,
  InnerWrapper,
  BestContents,
  BestContentsText,
  BestContentsBox,
  OrdinaryContentsTable,
  TableWrapper,
  HeadRow,
  MyTdButton,
  MyTr,
  MyTd,
} from "../../../../../styles/listboardemotion";

export default function ListBoardUI(props) {
  return (
    <>
      <FullWrapper>
        <InnerWrapper>
          <BestContents>
            <BestContentsText>베스트게시글</BestContentsText>
            <BestContentsBox>
              {props.bestdata?.fetchBoardsOfTheBest.map((el, index) => (
                <Row key={el._id}>
                  <Column>
                    <input type="checkbox" />
                  </Column>
                  <Column>{index + 1}</Column>
                  <Column>{el.writer}</Column>
                  <Column>{el.title}</Column>
                  <Column>{el.createdAt}</Column>
                </Row>
              ))}
            </BestContentsBox>
          </BestContents>

          <OrdinaryContentsTable>
            <TableWrapper>
              <HeadRow>
                <input type="checkbox" />
              </HeadRow>
              <HeadRow> 번호 </HeadRow>
              <HeadRow> 작성자 </HeadRow>
              <HeadRow> 제목 </HeadRow>
              <HeadRow> 날짜 </HeadRow>
              <HeadRow> 삭제 </HeadRow>

              {props.data?.fetchBoards.map((el, index) => (
                <MyTr key={el._id}>
                  <MyTd>
                    <input type="checkbox" />
                  </MyTd>
                  <MyTd>{index + 1}</MyTd>
                  <MyTd>{el.writer}</MyTd>
                  <MyTd>
                    <MyTdButton id={el._id} onClick={props.gotodetail}>
                      {el.title}
                    </MyTdButton>
                  </MyTd>
                  <MyTd>{getDate(el.createdAt)}</MyTd>
                  <MyTd>
                    <button id={el._id} onClick={props.onClickDelete}>
                      삭제하기
                    </button>
                  </MyTd>
                </MyTr>
              ))}
            </TableWrapper>
          </OrdinaryContentsTable>
        </InnerWrapper>
      </FullWrapper>
    </>
  );
}
