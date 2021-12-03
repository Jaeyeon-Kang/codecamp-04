import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일을 입력해 주세요"),

  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상이어야 합니다")
    .max(15, "비밀번호는 최대 15자리까지입니다")
    .required("비밀번호를 입력해 주세요"),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    console.log(data);
    // loginUser API 요청하기
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일 <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호 <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <MyButton isValid={formState.isValid}>로그인하기</MyButton>
    </form>
  );
}
