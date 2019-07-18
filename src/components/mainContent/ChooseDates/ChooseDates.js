import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import GLOBALS from './../../../globals';
import { humanizeNumber } from './../../../utils/utils';

import { SContainer, SPageTitle, SSubTitle, SText, SInput, SPageContainer } from './../../../components/commons/StyledComponents';
import { Button, SButton } from './../../commons/Button';
import NextButton from './../../commons/NextButton';
import BackNextButton from './../../commons/BackNextButton';

import { nextPage, updateSchedule } from './../../../actions/actions';

const dummyRepeatOptions = ['15th of each month', 'Custom'];


class ChooseDatesInner extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: null,
            repeatOptions: [],
            selectedRepeatOption: null,
            customInput: '',
        };
    }

    getRepeatOptions = (day) => {
        const dateValue = humanizeNumber(parseInt(day.toString().slice(8,10),10));
        const option1 = `${dateValue} of the month`;
        return [option1, 'Custom']
    }

    formatSelectedOption = repeatOption => {
        if (repeatOption === 'Custom') {
            return `Custom - ${this.state.customInput}`
        } else return repeatOption;
    }

    handleSelectRepeatOption = (option) => {
        this.setState({
            selectedRepeatOption: option,
        })
    }

    handleDayClick(day, { selected }) {
        const repeatOptions = this.getRepeatOptions(day);
        this.setState({
          selectedDay: selected ? undefined : day,
          repeatOptions: repeatOptions
        });
    }

    handleInputChange = (event) => {
        this.setState({
            customInput: event.target.value
        })
    }

    handleClickNext = () => {
        const selectedRepeatOption = this.formatSelectedOption(this.state.selectedRepeatOption);
        this.props.updateSchedule(this.state.selectedDay, selectedRepeatOption);
        this.props.goToNextPage();
    }

    render(){
        return (
            <SDatesPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>When shall we deliver your first box?</SPageTitle>
                <SDayPickerContainer>
                    <DayPickerInput 
                        selectedDays={this.state.selectedDay}
                        onDayClick={this.handleDayClick}/>
                </SDayPickerContainer>
                {<SRepeatScheduleContainer>
                    <SFollowUpQuestion>And after that?</SFollowUpQuestion>
                    {dummyRepeatOptions.map(option => {
                        return (
                        <SDateButton>{option}
                        </SDateButton>
                        )
                    })}
                    {
                        <SInput type="text" placeholder={`Tell us what schedule suits you!`} value={this.state.customInput} onChange={this.handleInputChange}/>
                    }
                    <SText>You can change your delivery dates at any time.</SText>
                </SRepeatScheduleContainer>}
                {<BackNextButton/>}
            </SDatesPageContainer>
        )
    }
}

const SDatesPageContainer = styled(SPageContainer)`
    padding-top: 10vh;
`

const SDayPickerContainer = styled.div`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    display: flex;
    justify-content: center;
    width: 100%;
`

const SRepeatScheduleContainer = styled.div`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

const SButtonContainer = styled.div`
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

const SFollowUpQuestion = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
`

const SDateButton = styled(SButton)`
    margin-bottom: 2vh;
    
`

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        updateSchedule: (firstDeliveryDate, repeatDeliverySchedule) => dispatch(updateSchedule(firstDeliveryDate, repeatDeliverySchedule)),
     }
}

export const ChooseDates = connect(mapStateToProps, mapDispatchToProps)(ChooseDatesInner);