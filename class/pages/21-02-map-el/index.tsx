export default function MapElPage() {
  // 1. 기본방법(화살표함수)
  //   ["철수", "영희", "훈이"].forEach((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // 2. 기본방법(그냥함수)
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // 3. 매개변수 바꿔보기
  //   ["철수", "영희", "훈이"].forEach((aaa, bbb) => {
  //     console.log("aaa", aaa);
  //     console.log("bbb", bbb);
  //   });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  return <></>;
}
