import * as yup from "yup";

export const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일을 확인해주세요")
    .required("필수항목입니다"),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다")
    .max(15, "비밀번호는 최대 15자리까지입니다")
    .required("비밀번호는 반드시 입력해주세요"),
});
