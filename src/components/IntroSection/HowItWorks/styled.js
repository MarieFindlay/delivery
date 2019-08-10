import styled from 'styled-components'
import { SText, SPageTitle, SContainer } from './../../commons/StyledComponents';
import { deviceWidth } from './../../commons/devices';
import GLOBALS from './../../../globals';

export const SHowItWorksContainer = styled(SContainer)`
    @media ${deviceWidth.tablet}{
        padding: 6vw;
    }
`

export const SParagraph = styled(SText)`
    margin-top: 0.5vh;
    line-height: 1.5;
    text-align: left;
    @media ${deviceWidth.tablet}{
        font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
        text-align: center;
    }
`

export const SHowItWorksTitle = styled(SPageTitle)`
    margin-top: 8vh;
    @media ${deviceWidth.tablet}{
        margin-top: 0;
    }
`

export const SHowItWorksStepsContainer = styled.div`
    margin-top: 2vh;
    @media ${deviceWidth.tablet}{
        display: flex;
        justify-content: space-between;
        margin-top: 3vh;
    }
`

export const SStepContainer = styled.div`
    @media ${deviceWidth.tablet}{
        width: 25%;
    }
`

export const SStepIcon = styled.img`
    @media ${deviceWidth.tablet}{
        height: 150px;
        justify-self: center;
        width: 100%;
        object-fit: contain;
        margin-bottom: 3vh;
        display: flex;
    }
    display: none;
`