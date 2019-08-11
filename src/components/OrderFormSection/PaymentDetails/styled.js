import styled from 'styled-components';
import GLOBALS from './../../../globals';
import { SInput } from './../../commons/StyledComponents';

export const SLongCardNumber = styled(SInput)`
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
`

export const SExtraCardDetails = styled.div`
    margin-top: 2vh;
    display: flex;
`

export const SSmallInput = styled(SInput)`
    &:not(:last-child){
        margin-right: 2vh;
    }
`