import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { SPageContainer, SPageTitle, SInput } from './../../commons/StyledComponents';
import { SPhoneNumber } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleClickNext = () => {
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Last thing! How can we contact you?</SPageTitle>
                <SInput type="text" placeholder="Type your email address"/>
                <SPhoneNumber type="text" placeholder="And your phone number"/>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}