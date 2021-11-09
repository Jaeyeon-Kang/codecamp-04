import styled from '@emotion/styled'

export const FullWrapper = styled.div`
width: 1920px;
height: 3000px;
/* background-color: lightpink; */
display: flex;
flex-direction: column;
align-items: center;
`;

export const InnerWrapper = styled.div`
width: 1200px;
padding-top: 696px;
/* background-color: cyan; */
display: flex;
flex-direction: column;
align-items: center;
`;


export const Row = styled.div`
display: flex;
flex-direction: row;
`;

export const Column = styled.div`
width: 20%;

`;

export const BestContents = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 80px;
/* background-color: skyblue; */

`;


export const BestContentsText = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 36px;
font-weight: 700;

`;


export const BestContentsBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
font-size: 18px;
font-weight: 500;
padding-top: 40px;
background-color: yellow;
`;

export const OrdinaryContentsTable = styled.div`
border-spacing: 0px;
width: 100%;
padding-top: 50px;
/* background-color: darkorchid; */
display: flex;
justify-content: center;

`;

export const TableWrapper = styled.table`
width: 1200px;
border-collapse: collapse;
border: 1px solid gray;
font-size: 16px;
font-weight: 400;
`;




export const MyTr = styled.tr`
text-align: center;
background-color: chartreuse;
border: 1px solid #BDBDBD;
`;

export const MyTd = styled.td`
padding: 23px 0 0 0;
background-color: white;
`;

