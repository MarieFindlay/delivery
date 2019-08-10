import styled from 'styled-components';
import { SContainer } from './../../commons/StyledComponents';
import GLOBALS from './../../../globals';
import { deviceWidth } from './../../commons/devices';

export const SHeroContainer = styled(SContainer)`
    height: 80vh;
    position: relative;
    @media ${deviceWidth.tablet}{
        padding: 3vw;
    }
`

export const SSubTitleContainer = styled.div`
    @media ${deviceWidth.tablet} {
        max-width: 35%;
        box-sizing: border-box;
        padding-right: 3vw;
    }
`

export const SHeroImageContainer = styled.div`
    flex: 1;
    margin-bottom: 4vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const SHeroImage = styled.img`
    height: 22vh;
    object-fit: cover;
    border-radius: 100%;
    @media ${deviceWidth.tablet} {
        position: absolute;
        object-fit: cover;
        width: 65%;
        border-radius: 0;
        margin-top: 0;
        height: 100%;
        top: 0;
        right: 0;
    }
`
export const SButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
    @media ${deviceWidth.tablet} {
        bottom: initial;
        left: 35%;
        top: 325px;
        width: 25%;
        min-width: 200px;
    }
`