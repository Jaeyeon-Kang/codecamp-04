// 1. "안녕하세요" 라는 버튼을 만들고, 버튼 클릭시 "반갑습니다"로 변경해 보세요
export default function HelloLetPage() {

    function hello() {
        document.getElementById("word").innerText = "반갑습니다."
    }

    return (
        <>
            <div id="word">안녕하세요</div>
            <button onClick={hello}>버튼클릭!!!</button>
        </>
    )
}