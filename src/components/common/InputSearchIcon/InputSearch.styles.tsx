import styled from "styled-components";

export const StyledDivInput = styled.div`
    width: 317px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #E7E6EF;
    position: relative;

    @media (min-width: 740px) and ( max-width: 1024px ) {
        width: 100%;
    }
`
export const StyledDivSearch = styled.div`
    background-color: #FB2E86;
    color: #ffff;
    height: 100%;
    width: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FB2E86;
    position: absolute;
    right: -2px;
    &:hover {
        cursor: pointer;
    }
`
