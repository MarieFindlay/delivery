import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { SPageContainer, SPageTitle, SInput, SPageContents, SInnerContents } from './../../commons/StyledComponents';
import { SEmailInput } from './styled';

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
                <SPageContents>
                    <SPageTitle>How can we contact you?</SPageTitle>
                    <SInnerContents>
                        <SEmailInput 
                            type="text"
                            placeholder="Type your email address"
                            value={this.state.emailAddress}
                            onChange={this.handleEmailInputChange}
                        />
                        <SInput
                            type="text"
                            placeholder="And your phone number"
                            value={this.state.phoneNumber} 
                            onChange={this.handlePhoneNumberInputChange}
                        />
                    </SInnerContents>
                    <BackNextButton
                        onClickBack={this.props.goToPrevPage}
                        onClickNext={this.handleClickNext}
                    />
                </SPageContents>
            </SPageContainer>
        )
    }
}