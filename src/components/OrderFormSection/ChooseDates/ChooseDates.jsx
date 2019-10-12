import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import GLOBALS from './../../../globals';
import { getNthDayFromDate } from './../../../utils/deliveryDetailsUtils';
import { REPEAT_SCHEDULES } from '../../../consts/scheduleConsts';
import { SPageContainer, SPageContents, SInnerContents, SPageTitle, SText } from './../../../components/commons/StyledComponents';
import BackNextButton from './../../commons/BackNextButton';
import { SDayPickerContainer, SRepeatScheduleContainer, SFollowUpQuestion, SDateButton, dayPickerInputStyles, SCustomScheduleInput } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: this.props.firstDeliveryDateOnMount,
            selectedRepeatSchedule: this.props.repeatDeliveryScheduleOnMount,
            customScheduleDetails: this.props.customScheduleDetailsOnMount,
        };
    }

    handleDayChange = (day) => {
        this.setState({
          selectedDay: day,
        });
    }

    getRepeatDeliveryOptions = () => {
        const { selectedDay } = this.state;
        const nthDay = getNthDayFromDate(selectedDay);
        return [
            {style: REPEAT_SCHEDULES.SAME_DAY, label: `${nthDay} of each month`},
            {style: REPEAT_SCHEDULES.CUSTOM, label: 'Custom'}
        ]
    }

    handleChooseRepeatStyle = style => {
        this.setState({
            selectedRepeatSchedule: style,
        })
    }

    handleCustomInputChange = (event) => {
        this.setState({
            customScheduleDetails: event.target.value
        })
    }

    handleClickNext = () => {
        const { selectedDay, selectedRepeatSchedule, customScheduleDetails} = this.state;
        if (!selectedDay) return;
        if (selectedRepeatSchedule === REPEAT_SCHEDULES.CUSTOM && !customScheduleDetails) return;
        this.props.updateSchedule(selectedDay, selectedRepeatSchedule, customScheduleDetails);
        this.props.goToNextPage();
    }

    render(){
        const { selectedDay, selectedRepeatSchedule } = this.state;
        const showCustomInputField = selectedRepeatSchedule === REPEAT_SCHEDULES.CUSTOM;
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageContents>
                    <SPageTitle>When shall we deliver your first box?</SPageTitle>
                    <SInnerContents>
                        <SDayPickerContainer>
                            <DayPickerInput
                                style={{ width: '100%' }}
                                selectedDays={this.state.selectedDay}
                                onDayChange={this.handleDayChange}
                                inputProps={{ style: dayPickerInputStyles }}
                            />
                        </SDayPickerContainer>
                        {selectedDay && 
                            <SRepeatScheduleContainer>
                                <SFollowUpQuestion>And after that?</SFollowUpQuestion>
                                {this.getRepeatDeliveryOptions().map(option => {
                                    return (
                                    <SDateButton
                                        key={option.style}
                                        selected={option.style === selectedRepeatSchedule}
                                        onClick={() => this.handleChooseRepeatStyle(option.style)}
                                    >
                                        {option.label}
                                    </SDateButton>
                                    )
                                })}
                                {showCustomInputField &&
                                    <SCustomScheduleInput 
                                        type="text"
                                        placeholder={`Tell us what schedule suits you!`}
                                        value={this.state.customScheduleDetails}
                                        onChange={this.handleCustomInputChange}
                                />}
                                <SText>You can change your delivery dates at any time.</SText>
                            </SRepeatScheduleContainer>
                        }
                    </SInnerContents>
                    <BackNextButton nextButtonDisabled={!this.state.selectedDay} onClickNext={this.handleClickNext} onClickBack={this.props.goToPrevPage}/>
                </SPageContents>
            </SPageContainer>
        )
    }
}