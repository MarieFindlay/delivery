import GLOBALS from './../../globals';
import styled from 'styled-components'

// div components

export const SContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${GLOBALS.DIMENSIONS.MARGIN}px
    background-color: ${props => props.color && props.color}
`

// text components

export const SText = styled.p`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL}
    color: ${GLOBALS.COLORS.CRIMSON}
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 4}px;
`

export const SMainTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIGGEST};
    margin-bottom: ${GLOBALS.DIMENSIONS / 2}px;
    margin-top: 0;
`

export const SSubTitle = styled(SText)`
    color: ${GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    line-height: 30px;
    letter-spacing: 0.02em;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 3}px;
`

export const SPageTitle = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
`

export const SClickableText = styled.button`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM}
    color: ${GLOBALS.COLORS.CRIMSON}
    text-decoration: underline;
`