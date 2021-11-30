import MyPagePresenter from "../mypage/MyPage.presenter";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { ChangeEvent, useState } from "react";

export default function MyPageContainer() {
  const user = collection(getFirestore(firebaseApp), "user");

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    if (!/\w+@\w+\.\w+/.test(userInfo.email)) {
      alert("이메일을 정확히 입력하세요");
    }
    await addDoc(user, {
      ...userInfo,
    });
    alert("welcome");
  };

  return (
    <MyPagePresenter
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
    />
  );
}
