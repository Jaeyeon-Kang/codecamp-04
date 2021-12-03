import * as yup from "yup";

export const schema = yup.object().shape({
  productName: yup.string().required("필수항목입니다"),
});
