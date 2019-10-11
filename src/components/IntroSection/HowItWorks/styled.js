import styled from 'styled-components'
import { SText, SPageTitle, SContainer } from './../../commons/StyledComponents';
import { deviceWidth } from './../../commons/devices';
import GLOBALS from './../../../globals';

export const SHowItWorksContainer = styled(SContainer)`
    background-color: ${GLOBALS.COLORS.SNOW};
`

export const SParagraph = styled(SText)`
    line-height: 1.5;
    text-align: left;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px;
    @media ${deviceWidth.tablet}{
        font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
        text-align: center;
        margin-bottom: 0;
        padding-top: 5px;
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
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN}px;
    }
`

export const SStepContainer = styled.div`
    @media ${deviceWidth.tablet}{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const SStepIcon = styled.img`
    @media ${deviceWidth.tablet}{
        height: 200px;
        width: 200px;
        justify-self: center;
        object-fit: cover;
        display: flex;   
    }
    @media ${deviceWidth.laptop}{
       height: 250px;
       width: 250px;
    }
    display: none;
`

export const SStepImageContainer = styled.div`
    @media ${deviceWidth.tablet}{
        display: flex;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: ${GLOBALS.COLORS.BEIGE};
        box-shadow: ${GLOBALS.EFFECTS.SHADOW};
        border-radius: 50%;
        overflow: hidden;
        background-color: ${props => props.color ? props.color : GLOBALS.COLORS.BEIGE}
    }
    display: none;
`