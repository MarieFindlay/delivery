import React from "react";
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import GLOBALS from './../../../globals';
import { getNthDayFromDate } from './../../../utils/utils';
import { SPageTitle, SText, SInput } from './../../../components/commons/StyledComponents';
import BackNextButton from './../../commons/BackNextButton';
import { SDatesPageContainer, SDayPickerContainer, SRepeatScheduleContainer, SFollowUpQuestion, SDateButton, dayPickerInputStyles } from './styled';

const REPEAT_STYLES = {
    CUSTOM: 'CUSTOM',
    SAME_DAY: 'SAME_DAY',
}
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: this.props.firstDeliveryDateOnMount,
            selectedRepeatStyle: this.props.repeatStyleOnMount,
            customInput: this.props.customInputOnMount,
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
            {style: REPEAT_STYLES.SAME_DAY, label: `${nthDay} of each month`},
            {style: REPEAT_STYLES.CUSTOM, label: 'Custom'}
        ]
    }

    handleChooseRepeatStyle = style => {
        this.setState({
            selectedRepeatStyle: style,
        })
    }

    handleCustomInputChange = (event) => {
        this.setState({
            customInput: event.target.value
        })
    }

    handleClickNext = () => {
        this.props.goToNextPage();
    }

    render(){
        const { selectedDay, selectedRepeatStyle } = this.state;
        const showCustomInputField = selectedRepeatStyle === REPEAT_STYLES.CUSTOM;
        return (
            <SDatesPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>When shall we deliver your first box?</SPageTitle>
                <SDayPickerContainer>
                    <DayPickerInput
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
                                selected={option.style === selectedRepeatStyle}
                                onClick={() => this.handleChooseRepeatStyle(option.style)}
                            >
                                {option.label}
                            </SDateButton>
                            )
                        })}
                        {showCustomInputField &&
                            <SInput 
                                type="text"
                                placeholder={`Tell us what schedule suits you!`}
                                value={this.state.customInput}
                                onChange={this.handleCustomInputChange}
                        />}
                        <SText>You can change your delivery dates at any time.</SText>
                    </SRepeatScheduleContainer>
                }
                <BackNextButton onClickNext={this.handleClickNext} onClickBack={this.props.goToPrevPage}/>
            </SDatesPageContainer>
        )
    }
}