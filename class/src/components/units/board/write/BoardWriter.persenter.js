import { MyInput, MyButton } from './BoarexdWriter.styles'

export default function BoardWriteUI(props) {

    return (
        <>
          작성자 : <MyInput type="text" onChange={props.aaa}/><br/>
          제목 : <MyInput type="text" onChange={props.bbb}/><br/>
          내용 : <MyInput type="text" onChange={props.qqq}/><br/>
          {/* 속성을 여러 개 넣을 때 객체로 만들어서 다른 페이지에 적용을 시켜준다. */}
          <MyButton MyQqq={props.MyQqq} onClick={props.zzz}>게시물 등록하기!!</MyButton>
        </>
    )
}