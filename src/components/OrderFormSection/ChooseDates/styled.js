import styled from 'styled-components';
import { SPageContainer, SText } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';
import GLOBALS from './../../../globals';

export const SDatesPageContainer = styled(SPageContainer)`
    padding-top: 10vh;
`

export const SDayPickerContainer = styled.div`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    display: flex;
    justify-content: center;
    width: 100%;
`

export const SRepeatScheduleContainer = styled.div`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

export const SFollowUpQuestion = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
`

export const SDateButton = styled(SButton)`
    margin-bottom: 2vh;
`