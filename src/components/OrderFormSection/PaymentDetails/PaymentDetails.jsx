import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { SPageContainer, SPageTitle, SInput } from './../../commons/StyledComponents';
import { SExtraCardDetails, SSmallInput, SLongCardNumber } from './styled';

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
                <SPageTitle>How do you want to pay?</SPageTitle>
                <SLongCardNumber type="number" placeholder={`Type your long card number`}/>
                <SExtraCardDetails>
                    <SSmallInput type="date"/>
                    <SSmallInput type="num" placeholder='csv'/>
                </SExtraCardDetails>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}