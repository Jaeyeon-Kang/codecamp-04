import styled from '@emotion/styled'
import { IMybuttonProps } from './BoardWrite.types'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    /* 다른 페이지에서 속성을 객체화한 것 중 .을 이용해 알맞은 키를 적용한다. */
    background-color: ${(props: IMybuttonProps) => props.MyQqq === true ? "yellow" : "gray"};
    font-size: 30px;
`