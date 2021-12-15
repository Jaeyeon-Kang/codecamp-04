import styled from "@emotion/styled";

export const UploadButton = styled.div`
  width: 180px;
  height: 180px;
  background-color: gray;
  margin-right: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;

  cursor: pointer;

  :hover {
    background-color: #81d8b1;
  }
`;

export const UploadImageHidden = styled.input`
  display: none;
`;

export const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 24px;

  cursor: pointer;
`;
