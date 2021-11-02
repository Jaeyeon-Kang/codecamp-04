import {WrapperHead,WrapperOne,WrapperOneDiv,
    WrapperTwo, WrapperTwoTitle, WrapperTwoContext, MyDiv,MyInput, 
    MyInputTitle, MyInputContext, WrapperThree, WrapperThreeTitle,
    InputTitle, InputSearch, WrapperFour, WrapperFive, WrapperPhoto, InputPhotos, divA
     } from '../../../styles/emotion'

export default function EmotionPage(){
  

    return (   
    <>       
        <WrapperHead>
            <MyDiv>게시물 수정</MyDiv><br/>
            <WrapperOne>   
                <WrapperOneDiv>
                작성자<br/> 
                <MyInput type="text" placeholder="이름을 적어주세요."  /> <br/>
                </WrapperOneDiv>
                <WrapperOneDiv style={{ 'marginLeft' : '20px' }}>
                비밀번호<br/>실험
                <MyInput type="text" placeholder="비밀번호를 입력해주세요."/><br/>
                </WrapperOneDiv>
            </WrapperOne>

            <WrapperTwo>
                <WrapperTwoTitle>제목<br/>
                <MyInputTitle type="text" placeholder="제목을 작성해주세요."/>
                </WrapperTwoTitle>
                <WrapperTwoContext>내용<br/>
                <MyInputContext type="text" placeholder="내용을 작성해주세요." />
                </WrapperTwoContext>
            </WrapperTwo>

            <WrapperThree>
                <WrapperThreeTitle>
                주소<br/>
                <InputTitle type ="text" placeholder="07250" /> 
                <InputSearch type="onclick" placeholder="우편번호검색"/><br/><br/>
                <MyInputTitle  type="text"></MyInputTitle><br/><br/>
                <MyInputTitle  type="text"></MyInputTitle>
                </WrapperThreeTitle>
            </WrapperThree>

            <WrapperFour>
            <WrapperTwoTitle>유튜브<br/>
                <MyInputTitle type="text" placeholder="링크를 복사해주세요."/>
                </WrapperTwoTitle>
            </WrapperFour>

            <WrapperFive>
            <WrapperPhoto>사진 첨부 
                <divA>
                <InputPhotos type="text" Placeholder="+ Upload" />
                <InputPhotos type="text" Placeholder="+ Upload" />
                <InputPhotos type="text" Placeholder="+ Upload" />
                </divA>
            </WrapperPhoto>
            </WrapperFive>
    </WrapperHead>
    </>
    ) 
}

