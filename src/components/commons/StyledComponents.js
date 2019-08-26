import GLOBALS from './../../globals';
import styled from 'styled-components'
import { deviceWidth } from './../commons/devices';

// div components

export const SContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: ${GLOBALS.DIMENSIONS.MARGIN}px;
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
    @media ${deviceWidth.tablet} {
        max-width: 500px;
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

`

// text components

export const SText = styled.p`
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
    @media ${deviceWidth.mobileS} {
        font-size: 40px;
    }
    @media ${deviceWidth.tablet} {
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 6}px;
    }
`

export const SSubTitle = styled(SText)`
    color: ${props => props.color ? props.color : GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM}
    line-height: 1.5em;
    margin-block-start:0em;
    margin-block-end: 0em;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    &:last-child{
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN}px;
        @media ${deviceWidth.mobileS} {
            margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
        }
    }
    letter-spacing: 0.02em;
    text-align: left;
    @media ${deviceWidth.tablet} {
        max-width: calc(35% - ${GLOBALS.DIMENSIONS.MARGIN}px);
    }
    @media ${deviceWidth.mobileS} {
        font-size: 17px;
    }
`

export const SPageTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    text-align: center;
    line-height: 0;
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
    &:focus{
        border: none;
    }
`