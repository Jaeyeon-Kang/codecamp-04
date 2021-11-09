import {
 Row,
 Column,
 FullWrapper,
 InnerWrapper,
 BestContents,
 BestContentsText,
 BestContentsBox,
 OrdinaryContentsTable,
 TableWrapper,
 MyTr,
 MyTd
     
    } from "../../../../../styles/listboardemotion"

export default function ListBoardUI(props){
    
    return(
        <>
        <FullWrapper>
         <InnerWrapper>
            <BestContents>
              <BestContentsText>베스트게시글</BestContentsText>
                <BestContentsBox>
                    {props.bestdata?.fetchBoardsOfTheBest.map((el, index) => 
                    (<Row key={el._id}>
                
                    <Column><input type="checkbox"/></Column>
                    <Column>{index+1}</Column>
                    <Column>{el.writer}</Column>    
                    <Column>{el.title}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button id={el._id} onClick={props.onClickDelete}>삭제하기</button></Column>
                    </Row>))}
                </BestContentsBox>
            </BestContents>
        
            
            <OrdinaryContentsTable>
             <TableWrapper>
     
                 <tr>
                  <th> 
                  <input type="checkbox"/>
                 </th>
                 <th> 번호 </th>
                 <th> 제목 </th>
                 <th> 작성자 </th>
                 <th> 날짜 </th>
                 <th> 삭제 </th>
                 </tr>
                
           
            {props.data?.fetchBoards.map((el, index) => 
            (<MyTr key={el._id}>
                <MyTd>
                    <input type = "checkbox"/>
                </MyTd>
                <MyTd>{index+1}</MyTd>
                <MyTd>{el.writer}</MyTd>    
                <MyTd>{el.title}</MyTd>
                <MyTd>{el.createdAt}</MyTd>
                <MyTd><button id={el._id} onClick={props.onClickDelete}>삭제하기</button></MyTd>
            </MyTr>))}

             </TableWrapper>
            </OrdinaryContentsTable>
         </InnerWrapper>
        </FullWrapper>
        </>

    )
}
