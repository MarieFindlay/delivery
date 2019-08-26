import styled from 'styled-components';
import { SPageContainer, SText, SInput } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';
import GLOBALS from './../../../globals';

const selectedBorderStyle = `${GLOBALS.COLORS.MUTED_CRIMSON} solid 2px`;
const unselectedBorderStyle = 'transparent solid 2px';

export const SDayPickerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

export const SRepeatScheduleContainer = styled.div`
    width: 100%;
`

export const SFollowUpQuestion = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

export const SDateButton = styled(SButton)`
    border: ${props => props.selected ? selectedBorderStyle : unselectedBorderStyle};
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

export const SCustomScheduleInput = styled(SInput)`
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

export const dayPickerInputStyles = {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Actor',
    boxSizing: 'border-box',
    fontSize: GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM,
    color: GLOBALS.COLORS.CRIMSON,
    padding: `${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px`,
    border: 'none',
    boxShadow: `${GLOBALS.EFFECTS.SHADOW}`,
    outline: 'none'
}