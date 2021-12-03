import { useForm } from "react-hook-form";
import * as yup from "yup";
// import 시 {}sms export로 내보냈을 때, 암것도 없으면 export default로 내보냈을 때 씀. export인 애들을 전부 한꺼번에 가져오고 싶을때는 *로 가져오고 as 뒤에 있는 단어로 바꿔서 import한다는 뜻
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
    .required("필수 입력 항목입니다"),
  // required는 필수조건이냐는 뜻.
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지입니다.")
    .required("필수 입력 항목입니다"),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    // 변경이 일어날 때마다 체크
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    console.log(data);
    // loginUser API 요청하기
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <MyButton isValid={formState.isValid}>로그인하기</MyButton>
    </form>
  );
}
