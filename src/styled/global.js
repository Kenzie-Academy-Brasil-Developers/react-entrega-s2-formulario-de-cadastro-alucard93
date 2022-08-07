import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
    
}
border-style, html {
    width: 100vw;
    height: 100vh;
    background: #121214;
}
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
`