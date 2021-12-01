import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 155px;
  padding-bottom: 164px;
`;

export const WelcomeWrapper = styled.div`
  font-size: 33px;
  font-family: "Libre Baskerville";
  font-weight: bold;
`;

export const MessageText = styled.div`
  padding-top: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const Username = styled.input`
  margin-top: 23px;
  width: 324px;
  height: 58px;
  background-color: #f8f8f8;
  border: 0px solid #1c1c1c;
  border-radius: 0.5rem;
`;

export const Password = styled.input`
  margin-top: 23px;
  width: 324px;
  height: 58px;
  background-color: #f8f8f8;
  border: 0px solid #1c1c1c;
  border-radius: 0.5rem;
`;

export const MessageWrapper = styled.div`
  width: 323px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
`;

export const RememberMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* justify-content: baseline; */
  padding-top: 5px;
`;

export const RadioLabel = styled.div`
  font-size: 12px;
  margin-top: 9px;
`;

export const Login = styled.div`
  background-color: white;
  width: 323px;
  height: 58px;
  font-family: "Libre Baskerville";
  font-weight: 500;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid #1c1c1c;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 13px;
`;
