import styled from 'styled-components'
import { SText, SPageTitle, SContainer } from './../../commons/StyledComponents';
import { deviceWidth } from './../../commons/devices';
import GLOBALS from './../../../globals';

export const SHowItWorksContainer = styled(SContainer)`
    background-color: ${GLOBALS.COLORS.CREAM};
`

export const SParagraph = styled(SText)`
    line-height: 1.5;
    text-align: left;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px;
    @media ${deviceWidth.tablet}{
        font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
        text-align: center;
        margin-bottom: 0;
    }
`

export const SHowItWorksTitle = styled(SPageTitle)`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN}px;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    @media ${deviceWidth.tablet}{
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 6}px;
    }
`

export const SHowItWorksStepsContainer = styled.div`
    @media ${deviceWidth.tablet}{
        display: flex;
        justify-content: space-between;
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
        display: flex;
    }
    display: none;
`