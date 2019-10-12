import styled from 'styled-components';
import { SContainer } from './../../commons/StyledComponents';
import { deviceWidth } from './../../commons/devices';
import GLOBALS from './../../../globals';

export const SHeroContainer = styled(SContainer)`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: ${GLOBALS.DIMENSIONS.MARGIN}px;
    @media ${deviceWidth.mobileS} {
        padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 3}px;
    }
    @media ${deviceWidth.tablet} {
        padding: ${GLOBALS.DIMENSIONS.MARGIN * 3 / 2}px;
        height: 550px;
        flex-direction: row;
    }
    @media ${deviceWidth.laptop} {
        padding: ${GLOBALS.DIMENSIONS.MARGIN * 2}px;
    }
`

export const SHeroTextContainer = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    @media ${deviceWidth.tablet} {
        justify-content: space-between;
    }
   
    
`

export const SSubTitleContainer = styled.div`
    @media ${deviceWidth.tablet} {
        box-sizing: border-box;
        margin-bottom: 0;
    }
`

export const SHeroImageContainer = styled.div`
    @media ${deviceWidth.mobileS} {
        transform: translateY(30px); 
        margin-right: 0;
    }
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(50px);
    z-index: 0;
    margin-right: -50px;
    @media ${deviceWidth.tablet} {
       position: absolute;
       right: 50px
       bottom:50px;
    }
`

export const SHeroImage = styled.img`
    object-fit: cover;
    width: 300px;
    @media ${deviceWidth.tablet} {      
        object-fit: cover;
        width: 350px;
    }
    @media ${deviceWidth.laptop} {
        width: 450px;
    }
    @media ${deviceWidth.mobileM} {
        width: 250px;
    }
`
export const SButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
    min-width: 250px;
    z-index: 1;
    @media ${deviceWidth.tablet} {
       position: initial;
       bottom: initial;
       transform: initial;
       justify-content: flex-start;
    }
`
export const SHeroButton = styled.a`
    background-color: ${GLOBALS.COLORS.BEIGE};
    color: ${GLOBALS.COLORS.CRIMSON};
    font-family: 'Actor';
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    border: none;
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 2}px ${GLOBALS.DIMENSIONS.MARGIN}px;
    text-decoration: none;
    :focus{
        outline: none;
    }
    :hover{
        cursor:pointer;
    }
`