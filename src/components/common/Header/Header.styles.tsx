import styled,{css} from "styled-components";

export const StyledTopBar = styled.div`
    /* position: relative; */
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
    background-color: #7E33E0;
    z-index: 9999;
    height: 44px;
`

export const StyledUl = styled.ul`
    display: flex;
    align-items: center;

    /* normal ipad */
    @media (min-width: 768px) and ( max-width: 1023px ) {
        display: flex;
        justify-content: space-between;
    }

    /* mobile */
    @media (max-width: 739px) {
        flex-direction: column ;
        justify-content: flex-start
    }
`
export const StyledDiv= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const StyledDivTopBar = styled(StyledDiv)`
    height: 44px;  
    .contact {
        padding: 0 15px;

    }
    @media (min-width: 768px) and ( max-width: 1023px ) {
    .info {
        display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center
}
`

export const StyledLinkTag = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
    margin-top: 44px;
`

export const StyledDivHeader= styled.div`
    display: flex;
    align-items: center;
    flex: 2;

    @media (min-width: 740px) and ( max-width: 1024px ) {
        flex: 1;
    }
`

export const StyledLiNavList = styled.li`
    margin-right:22px;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    @media (min-width: 740px) and ( max-width: 1024px ) {

    }
`

export const StyledDivHeaderInput = styled.div`
    flex: 1;
    margin-left: 30px;

    @media (min-width: 740px) and ( max-width: 1024px ) {
        flex: 2;
    }

    @media (max-width: 739px) {
        margin-left: 0px;
    }
`