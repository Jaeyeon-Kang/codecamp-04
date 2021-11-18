export default function HelloLetPage() {

    function zzz() {
        // 화면 바꾸는 코드를 따로 작성해 주어야 한다.
        document.getElementById("qqq").innerText = "반갑습니다."
    }

    return(
        <>
            {/* 직접 강제로 작성하는 것은 문자열로 작성 */}
            {/* 위의 자바스크립트에서 작성하는 것은 중괄호를 이용해 작성한다. */}
            <div id="qqq">안녕하세요</div>
            <button onClick={zzz}>버튼클릭!!!</button>
        </>


    )
}