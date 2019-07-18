import styled from 'styled-components';
import GLOBALS from './../../../globals';
import { SText, SPageContainer } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';

export const SBoxPageContainer = styled(SPageContainer)`
    padding-top: 8vh;
`

export const SOrderSummary = styled.div`
    margin-bottom: 4vh;
    padding-bottom: 0;
`

export const SOrderHeadline = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
`

export const SOrderButton = styled(SButton)`
    background-color: ${GLOBALS.COLORS.PURPLE};
    color: ${GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    font-weight: 300;
`

export const SOrderPrice = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    margin-bottom: 0;
    margin-top: 2vh;
`

export const SSubText = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_TINY};
`