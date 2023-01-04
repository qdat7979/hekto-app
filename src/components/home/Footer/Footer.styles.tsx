import styled from "styled-components";

export const StyledDivFooter = styled.div`
    /* height: 479px;     */
    background-color: #EEEFFB;
    padding: 95px 0;
`

export const StyledParagraph = styled.div`
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: #8A8FB9;
    margin-bottom: 10px;    
`
export const StyledLinkFooter = styled(StyledParagraph)`
    margin-bottom: 21px;
    &:hover{
        color: #FB2E86;
    }
`

export const StyledTitleFooter = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    color: #000000;
    font-weight: 500;
    margin-bottom: 42px;
`