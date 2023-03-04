import styled from "styled-components"

export const Title = styled.h1 `
    color:yellowgreen;
    font-size: ${props => `${props.fontSize}px`};
    text-transform: uppercase;
    span{
        font-size: 14px;
    }
`
