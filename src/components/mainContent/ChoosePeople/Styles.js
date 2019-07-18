import styled from 'styled-components';
import { SText } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';
import GLOBALS from './../../../globals';

export const SGroupImage = styled.img`
    align-self: center;
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    margin-bottom: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
`

export const SAmountPickerContainer = styled.div`
    align-content: center;
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
    display: flex;
    justify-content: space-between;
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
    width: 100%;   
`

export const SPlusMinusButton = styled(SButton)`
    align-content: center;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    height: 8vh;
    justify-content: center;
    width: 40%;  
`

export const SLabel = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    line-height: 0;
    text-align: center;
`

export const SMiddlePanel = styled.div`
    align-content: center;
    background-color: ${GLOBALS.COLORS.MUTED_BEIGE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
`

export const SAmount = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    line-height: 0;
    text-align: center;
`