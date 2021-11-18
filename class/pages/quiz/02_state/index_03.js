// 0이라는 숫자와 카운트올리기 라는 버튼을 만들고, 버튼 클릭 시 숫자를 1씩 
// 증가해 주세요.

export default function CountLetPage() {

    function zzz() {
        const result = Number(document.getElementById("zero").innerText) + 1
        document.getElementById("zero").innerText = result
    }

    return (
        <>
            <div id="zero">0</div>
            <button onClick={zzz}>카운트 증가</button>
        </>
    )

}