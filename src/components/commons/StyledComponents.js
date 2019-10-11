import GLOBALS from './../../globals';
import styled from 'styled-components'
import { deviceWidth } from './../commons/devices';

export const callToActionDestination = 'build-my-box';

// div components
export const SContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 4}px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color && props.color};
`

export const SPageContainer = styled(SContainer)`
    min-height: 100vh;
    background-color: ${GLOBALS.COLORS.BEIGE};
    align-items: center;
`

export const SPageContents = styled.div`
    width: 100%;
    @media ${deviceWidth.tablet} {
        max-width: 500px;
        width: 500px;
    }
    flex: 1;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding-top: 10vh;
    padding-bottom: 10vh;
`

export const SInnerContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${GLOBALS.DIMENSIONS.MARGIN}px 0;

`

// text components
export const SText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Actor&display=swap');
    font-family: 'Actor', sans-serif;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL}
    color: ${GLOBALS.COLORS.CRIMSON}
    text-align: center;
    font-weight: 300;
    margin-block-start: 0;
    margin-block-end: 0;
`

export const SMainTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIGGEST};    
    text-align: left;
    line-height: 0;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN}px;
    color: ${GLOBALS.COLORS.DARK_CRIMSON};
    @media ${deviceWidth.mobileS} {
        font-size: 40px;
    }
    @media ${deviceWidth.tablet} {
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN * 3 / 2}px;
    }
`

export const SSubTitle = styled(SText)`
    color: ${props => props.color ? props.color : GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM}
    line-height: 1.5em;
    margin-block-start:0em;
    margin-block-end: 0em;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 6}px;
    letter-spacing: 0.02em;
    text-align: left;
    @media ${deviceWidth.tablet} {
        max-width: 300px;
        font-size: 18px;
    }
    @media (min-width: 850px) {
        max-width: 450px;
    }
    @media ${deviceWidth.laptop} {
        font-size: 22px;
        max-width: 600px;
    }
    @media (min-width: 1150px) {
        max-width: initial;
    }
    @media ${deviceWidth.mobileS} {
        font-size: 17px;
    }
`

export const SPageTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    text-align: center;
`

export const SClickableText = styled.button`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM}
    color: ${GLOBALS.COLORS.CRIMSON}
    text-decoration: underline;
`

export const SInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL};
    text-align: center;
    font-family: 'Actor';
    border:none;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px 0;
    box-shadow: ${GLOBALS.EFFECTS.INSET_SHADOW};
    color: ${GLOBALS.COLORS.CRIMSON};
    &:focus{
        outline: none;
    }
`