import styled from "@emotion/styled"

export const SubmitButton = styled.button`
    background-color: ${(props) => props.qqq === true ? "yellow" : "whitegrey"};
    // 함수가 아니기에 props를 못받아서 강제로 함수를 만든 것
    font-size: 30px;
` 