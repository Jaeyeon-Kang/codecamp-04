import {
  WelcomeWrapper,
  Wrapper,
  MessageText,
  Username,
  Password,
  RememberMessage,
  RadioLabel,
  ForgetMessage,
  MessageWrapper,
  Login,
  SignUpWrapper,
} from "./Login.styles";
import Checkbox from "@mui/material/Checkbox";

export default function LoginPresenter(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Wrapper>
        <WelcomeWrapper>Welcome back!</WelcomeWrapper>
        <MessageText>Sign in to get the most out of nuntium</MessageText>
        <Username
          type="text"
          placeholder="Email"
          onChange={props.onChangeMyEmail}
        />
        <Password
          type="password"
          placeholder="password"
          onChange={props.onChangeMyPassword}
        />
        <MessageWrapper>
          <RememberMessage>
            <Checkbox {...label} />
            <RadioLabel>Remember me</RadioLabel>
          </RememberMessage>
          <ForgetMessage>Forgot Password?</ForgetMessage>
        </MessageWrapper>
        <Login onClick={props.onClickLogin}>Login</Login>
        <SignUpWrapper onClick={props.MoveToSignUpPage}>SignUp</SignUpWrapper>
      </Wrapper>
    </>
  );
}
