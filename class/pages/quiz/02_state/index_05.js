// 인증번호 6자리 '000000'과 "인증번호전송" 이라는 버튼을 만들고, 
// 버큰 클릭시 인증번호를 만들어서 인증번호 6자리가 변경되도록 적용해 주세요

export default function CertiLetPage() {

    function getToken() {
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("number").innerText = token
    }

    return(
        <>
            <div id="number">000000</div>
            <button onClick={getToken}>인증번호전송</button>
        </>

    )
}