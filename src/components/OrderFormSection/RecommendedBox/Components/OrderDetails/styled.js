import styled from 'styled-components';
import GLOBALS from './../../../../../globals';
import { SText } from './../../../../commons/StyledComponents';

export const SOrderDetails = styled.div`
    background-color: ${GLOBALS.COLORS.CREAM};
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 100%;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

export const SItem = styled(SText)`
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 10}px;
`