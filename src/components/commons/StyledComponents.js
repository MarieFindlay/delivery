import GLOBALS from './../../globals';
import styled from 'styled-components'

// div components

export const SContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    background-color: ${props => props.color && props.color};
`

export const SPageContainer = styled(SContainer)`
    min-height: 100vh;
    padding-top: ${GLOBALS.DIMENSIONS.MARGIN * 2}px;
`

// text components

export const SText = styled.p`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL}
    color: ${GLOBALS.COLORS.CRIMSON}
    text-align: center;
    font-weight: 300;
`

export const SMainTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIGGEST};
    margin-bottom: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    margin-top: 0;
    text-align: left;
`

export const SSubTitle = styled(SText)`
    color: ${props => props.color ? props.color : GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    line-height: 25px;
    letter-spacing: 0.02em;
    text-align: left;
`

export const SPageTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    text-align: center;
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
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
    line-height: 40px;
    padding-left: 10px;
    text-align: center;
`