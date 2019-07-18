import styled from 'styled-components'
import { SContainer } from './../../commons/StyledComponents'
import GLOBALS from './../../../globals'

export const SHeroContainer = styled(SContainer)`
    height: 80vh;
    position: relative;
`;

export const SHeroImage = styled.img`
    height: 20vh;
    object-fit: cover;
    align-self: flex-end;
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    border-radius: 100px;
`

export const SButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
`