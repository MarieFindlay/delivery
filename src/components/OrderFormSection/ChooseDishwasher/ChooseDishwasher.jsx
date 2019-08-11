import React from "react";
import GLOBALS from './../../../globals';
import { SPageTitle, SPageContainer } from './../../commons/StyledComponents'
import CardButton from './../../commons/CardButton';
import BackNextButton from './../../commons/BackNextButton';

export default class extends React.Component {
    constructor(props) {
        super(props);
            this.state = {};
    }

    handleClickNext = () => {
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Do you use a dishwasher?</SPageTitle>
                <CardButton title="Yes" subtitle="send me dishwasher tablets"/>
                <CardButton title="No" subtitle="stick with washing up liquid"/>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}