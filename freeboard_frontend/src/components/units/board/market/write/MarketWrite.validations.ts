import * as yup from "yup";

export const schema = yup.object().shape({
  productName: yup.string().required("필수항목입니다"),
  contents: yup.string().required("필수항목입니다"),
  productPrice: yup.number().required("필수항목입니다"),
  productRemark: yup.string().required("필수항목입니다"),
});
