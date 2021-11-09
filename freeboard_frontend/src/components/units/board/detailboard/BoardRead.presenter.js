import {
    FullBox,
    Wrapper,
    ProfileWrapper,
    WriterWrapper,
    ProfileImage,
    IconImage,
    Link,
    Location,
    ProfileData,
    Writer,
    WriteDate,
    LabelWrapper,
    Label,
    ImageWrapper2,
    ImageBox,
    ContentsWrapper,
    Contents,
    RouterBox,
    GoListBox,
    DoCorrectBox,
    DoDeleteBox
     
    } from "../../../../../styles/detailboardemotion"
    

    export default function BoardReadUI(props){


       
        return(

        
              <>
               <FullBox>
                <Wrapper> 
                  <ProfileWrapper>
                    <WriterWrapper>   
                        <ProfileImage>
                          <img src="/images/profile.png"/>
                        </ProfileImage>
                        <ProfileData>
                          <Writer>{props.aaa}</Writer>
                          <WriteDate>{props.bbb}</WriteDate>
                        </ProfileData>
                      </WriterWrapper>
                      <IconImage>
                        <Link><img src="/images/link.png"/></Link>
                        <Location><img src="/images/location.png"/></Location>
                        </IconImage>
                  </ProfileWrapper>
                  <LabelWrapper>
                    <Label>{props.ccc}</Label>
                  </LabelWrapper>
                  <ImageWrapper2>
                    <ImageBox></ImageBox>
                  </ImageWrapper2>
                  <ContentsWrapper>
                    <Contents>
                      {props.ddd}
                      </Contents>
                  </ContentsWrapper>
                </Wrapper>
                  <RouterBox>
                    <GoListBox onClick = {props.listbox}> 목록으로</GoListBox>
                    <DoCorrectBox > 수정하기</DoCorrectBox>
                    <DoDeleteBox onClick={props.deletebox}>삭제하기</DoDeleteBox>
                  </RouterBox>
              </FullBox>
                </>
              
        )


    }