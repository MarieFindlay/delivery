import styled from 'styled-components';
import GLOBALS from './../../../globals';
import { SText, SPageContainer } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';

export const SBoxPageContainer = styled(SPageContainer)`
`

export const SOrderSummary = styled.div`
`

export const SOrderHeadline = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

export const SOrderButton = styled(SButton)`
    background-color: ${GLOBALS.COLORS.PURPLE};
    color: ${GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    font-weight: 300;
    width: 100%;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

export const SOrderPrice = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

export const SSubText = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_TINY};
`