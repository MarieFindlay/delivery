import React from "react";
import GLOBALS from './../../../globals';
import AmountPicker from './Components/AmountPicker/index';
import NextButton from './../../commons/NextButton';
import { SPageTitle, SPageContainer, SText, SPageContents, SInnerContents, callToActionDestination } from './../../commons/StyledComponents';
import { SGroupImage } from './styled';

const MAX_NUMBER_OF_PEOPLE = 4;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfPeople: this.props.numberOfPeopleOnMount
        };
    }

    handleClickPlus = () => {
        if (this.state.numberOfPeople === MAX_NUMBER_OF_PEOPLE) return;
        const newNumber = this.state.numberOfPeople + 1;
        this.setState({
            numberOfPeople: newNumber
        })
    }

    handleClickMinus = () => {
        if (this.state.numberOfPeople === 1) return;
        const newNumber = this.state.numberOfPeople - 1;
        this.setState({
            numberOfPeople: newNumber
        })
    }

    handleClickNext = () => {
        this.props.updateNumberOfPeople(this.state.numberOfPeople);
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer id={callToActionDestination} color={GLOBALS.COLORS.BEIGE}>
                <SPageContents>
                    <SPageTitle>For how many people?</SPageTitle>
                    <SInnerContents>
                        <SGroupImage src={GLOBALS.IMAGES.GROUP}/>
                        <AmountPicker 
                            number={this.state.numberOfPeople}
                            handleClickPlus={this.handleClickPlus}
                            handleClickMinus={this.handleClickMinus}
                        />
                        <SText>Tell us how many in your house and we’ll recommend the perfect box.</SText>
                    </SInnerContents>
                    <NextButton onClick={this.handleClickNext}/>
                </SPageContents>
            </SPageContainer>
        )
    }
}

