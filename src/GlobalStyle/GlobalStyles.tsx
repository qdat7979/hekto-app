import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
        overflow: hidden;
    }
    .container {
        max-width: 1135px;
        width: 1135px;
        margin-left: auto;
        margin-right: auto;
    }
    body {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        transition: .2s;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #fff
    }
    input {
        border: none;
        outline: none;
    }

    /* ipad pro */
    @media ( max-width: 1024px ) {
        .container {
            width: 930px;
        }
    }

    /* normal ipad */
    @media (min-width: 768px) and ( max-width: 1023px ) {
        .container {
            width: 690px;
        }
    }

    /* Mobile */
    @media ( max-width: 739px ) {
        .container {
            width: 319px;
        }
    }
`