export default function BrowserStoragePage() {
  function onClickSetCookie() {
    document.cookie = "aaa=철수";
    // key, value 사이를 =으로 구분함
  }

  function onClickSetLocalStorage() {
    localStorage.setItem("bbb", "영희");
  }
  // 뒤에는 키값, value값을 넣어주면 됨
  function onClickSetSessionStorage() {
    sessionStorage.setItem("ccc", "훈이");
  }

  function onClickGetCookie() {
    const zzz = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0]; // "zzz="짱구"
    console.log(zzz.split("=")[1]); // ["zzz", "짱구"] 에서 1번째
  }

  function onClickGetLocalStorage() {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
    // localStorage.getItem("키값") 을 bbb에 담아서 잘 나왔는지 찍어보는거임
  }

  function onClickGetSessionStorage() {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  }

  return (
    <>
      <button onClick={onClickSetCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSetLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSetSessionStorage}>
        세션스토리지에 저장하기
      </button>
      ========================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬 스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
