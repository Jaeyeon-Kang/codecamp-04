import {
  WelcomeWrapper,
  Wrapper,
  Username,
  Password,
  RememberMessage,
  RadioLabel,
  MessageWrapper,
  Login,
} from "./SignUp.styles";
import Checkbox from "@mui/material/Checkbox";

export default function SignUpPresenter(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Wrapper>
        <WelcomeWrapper>Sign Up</WelcomeWrapper>

        <Username
          type="text"
          placeholder="name"
          onChange={props.onChangeMyName}
        />
        <Username
          type="text"
          placeholder="email"
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
            <RadioLabel>
              Creating an account means you're okay with our Terms of Service
              and Privacy Policy.
            </RadioLabel>
          </RememberMessage>
        </MessageWrapper>
        <Login onClick={props.onClickSignUp}>Register</Login>
      </Wrapper>
    </>
  );
}
