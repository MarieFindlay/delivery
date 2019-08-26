import styled from 'styled-components';
import { SPageContainer, SText } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';
import GLOBALS from './../../../globals';

const selectedBorderStyle = `${GLOBALS.COLORS.MUTED_CRIMSON} solid 2px`;
const unselectedBorderStyle = 'transparent solid 2px';

export const SDatesPageContainer = styled(SPageContainer)`
`

export const SDayPickerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const SRepeatScheduleContainer = styled.div`
`

export const SFollowUpQuestion = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
`

export const SDateButton = styled(SButton)`
    border: ${props => props.selected ? selectedBorderStyle : unselectedBorderStyle};
`

export const dayPickerInputStyles = {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Actor',
    fontSize: GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM,
}