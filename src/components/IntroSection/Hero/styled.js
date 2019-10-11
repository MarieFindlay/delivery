import styled from 'styled-components';
import { SContainer } from './../../commons/StyledComponents';
import { deviceWidth } from './../../commons/devices';
import GLOBALS from './../../../globals';

export const SHeroContainer = styled(SContainer)`
    position: relative;
    box-sizing: border-box;
    padding: ${GLOBALS.DIMENSIONS.MARGIN}px;
    @media ${deviceWidth.mobileS} {
        padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 3}px;
    }
    @media ${deviceWidth.tablet} {
        height: 70vh;
    }
`

export const SSubTitleContainer = styled.div`
    @media ${deviceWidth.tablet} {
        box-sizing: border-box;
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN}px;
    }
`

export const SHeroImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const SHeroImage = styled.img`
    object-fit: cover;
    width: 300px;
    margin-bottom: -50px;
    margin-right: -45px;
    margin-top: 20px;
    @media ${deviceWidth.tablet} {
        position: absolute;
        object-fit: cover;
        border-radius: 0;
        bottom: 50px;
        width: 400px;
    }
    @media ${deviceWidth.laptop} {
        width: 500px;
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