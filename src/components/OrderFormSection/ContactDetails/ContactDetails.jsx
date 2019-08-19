import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { SPageContainer, SPageTitle, SInput } from './../../commons/StyledComponents';
import { SPhoneNumber } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: this.props.emailAddressOnMount,
            phoneNumber: this.props.phoneNumberOnMount,
         };
    }

    handleEmailInputChange = (event) => {
        this.setState({
            emailAddress: event.target.value,
        })
    }

    handlePhoneNumberInputChange = (event) => {
        this.setState({
            phoneNumber: event.target.value,
        })
    }

    handleClickNext = () => {
        const { emailAddress, phoneNumber } = this.state;
        if (!emailAddress || !phoneNumber) return;
        this.props.updateContactDetails(this.state.emailAddress, this.state.phoneNumber)
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>How can we contact you?</SPageTitle>
                <SInput type="text" placeholder="Type your email address" value={this.state.emailAddress} onChange={this.handleEmailInputChange}/>
                <SPhoneNumber type="text" placeholder="And your phone number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberInputChange}/>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}