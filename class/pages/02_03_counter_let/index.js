export default function CounterLetPage() {

    function zzz() {
        // 화면 바꾸는 코드를 따로 작성해 주어야 한다.
        const bbb = Number(document.getElementById("qqq").innerText) + 1
        document.getElementById("qqq").innerText = bbb
    }

    return(
        <>
            {/* 직접 강제로 작성하는 것은 문자열로 작성 */}
            {/* 위의 자바스크립트에서 작성하는 것은 중괄호를 이용해 작성한다. */}
            <div id="qqq">0</div>
            <button onClick={zzz}>카운트증가!!!</button>
        </>


    )
}