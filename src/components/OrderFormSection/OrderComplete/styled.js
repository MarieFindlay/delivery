import styled from 'styled-components';
import {SPageContents, SPageTitle} from './../../commons/StyledComponents';
import GLOBALS from './../../../globals';

export const SOrderCompletePageContents = styled(SPageContents)`
    justify-content: center;
`

export const SOrderCompleteTitle = styled(SPageTitle)`
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`