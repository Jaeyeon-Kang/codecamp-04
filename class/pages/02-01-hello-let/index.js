export default function HelloLetPage(){

    function zzz(){
        document.getElementById("qqq").innerText="반갑습니다"
    }


    return(
        <>
        <div id="qqq">안녕하세요</div> 
        <button onClick={zzz}>버튼클릭!!!</button>
        </>
    )
}

//리액트 전용 html(JSX)
//위에 자바스크립트로 적는 내용 -> button onClick={}. 기존것과 다르게 {}만 하면 됨, 원래는 button onclick="zzz()"
//div id="qqq" 내가 강제로 쓰는 문자열