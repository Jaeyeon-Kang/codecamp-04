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
} from "./Login.styles";
import Checkbox from "@mui/material/Checkbox";

export default function LoginPresenter() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Wrapper>
        <WelcomeWrapper>Welcome back!</WelcomeWrapper>
        <MessageText>Sign in to get the most out of nuntium</MessageText>
        <Username type="text" placeholder="Username" />
        <Password type="password" placeholder="password" />
        <MessageWrapper>
          <RememberMessage>
            <Checkbox {...label} />
            <RadioLabel>Remember me</RadioLabel>
          </RememberMessage>
          <ForgetMessage>Forgot Password?</ForgetMessage>
        </MessageWrapper>
        <Login>Login</Login>
      </Wrapper>
    </>
  );
}
