import styled from "@emotion/styled";

export const FullBox = styled.div`
  width: 1920px;
  height: 3861px;
  /* background-color: lightseagreen; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 1562px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  /* background-color: lightgray; */
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 27px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid lightgray;
  border-width: 0px 0px 1px 0px;
  /* background-color: pink; */
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* background-color: cyan; */
`;

export const ProfileImage = styled.div``;

export const IconImage = styled.div`
  /* background-color: lightgreen; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 32px;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 16px;
`;

export const Writer = styled.div`
  font-family: Arial;
  font-size: 24px;
  font-weight: medium;
`;

export const WriteDate = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #828282;
  font-size: 16px;
`;

export const LabelWrapper = styled.div`
  /* background-color: brown; */
  padding-top: 80;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Label = styled.div`
  /* background-color: green; */
  padding-left: 0px;
  font-size: 36px;
  font-weight: 700;
`;

export const ImageWrapper2 = styled.div`
  padding-top: 40px;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageBox = styled.div`
  width: 996px;
  height: 480px;
  background-color: #f2f2f2;
  border: none;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 40px;
  width: 100%;
  /* background-color: burlywood; */
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
`;

export const RouterBox = styled.div`
  /* background-color: coral; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 82px;
`;

export const GoListBox = styled.div`
  width: 179px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    background-color: yellow;
  }
`;

export const DoCorrectBox = styled.div`
  margin-left: 24px;
  width: 179px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    background-color: yellow;
  }
`;

export const DoDeleteBox = styled.div`
  margin-left: 24px;
  width: 179px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    background-color: yellow;
  }
`;
export const CommentBoxWrapper = styled.div`
  width: 1199px;
  height: 700px;
  padding-top: 213px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: darksalmon; */
`;

export const CreateBoardComment = styled.input`
  width: 1200px;
  height: 161px;
  border: 1px solid gray;
`;
