import styled from "@emotion/styled"
import { IMyButtonProps } from "./BoardWrite.types"


export const MyInput = styled.input`
    
`


export const MyButton = styled.button`
    background-color: ${(props: IMyButtonProps) => props.qqq === true ? "yellow" : "whitegrey"};
    // 함수가 아니기에 props를 못받아서 강제로 함수를 만든 것
    font-size: 30px;
`
