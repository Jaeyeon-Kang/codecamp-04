
export default function BoardWriteUI(props){

    return(
        <>
        작성자: <input type="text" onChange={props.aaa} /><br />
        제목: <input type="text" onChange={props.bbb} /><br />
        내용: <input type="text" onChange={props.ccc} /><br />
        <button onClick={props.ggg ? props.xxx : props.zzz} qqq={props.qqq}> 게시물 {props.ggg ? "수정" : "등록"}하기 </button>
        </>
        // {props.ggg && <MyButton onClick={props.zzz} qqq={props.qqq}> 게시물 등록하기</MyButton>}
        // {props.ggg && <MyButton onClick={props.xxx} qqq={props.qqq}> 게시물 수정하기</MyButton>}
        )
} 