import React from "react";
import GLOBALS from './../../../globals';
import { SPageTitle, SPageContainer } from './../../commons/StyledComponents'
import CardButton from './../../commons/CardButton';
import BackNextButton from './../../commons/BackNextButton';

export default class extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                hasDishwasher: this.props.hasDishwasherOnMount,
            };
    }

    toggleHasDishwasher = (trueOrFalse) => {
        this.setState({
            hasDishwasher: trueOrFalse,
        })
    }

    handleClickNext = () => {
        this.props.updateHasDishwasher(this.state.hasDishwasher);
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Do you use a dishwasher?</SPageTitle>
                <CardButton 
                    title="Yes"
                    subtitle="send me dishwasher tablets"
                    selected={this.state.hasDishwasher}
                    onClick={() => this.toggleHasDishwasher(true)}
                />
                <CardButton 
                    title="No"
                    subtitle="stick with washing up liquid"
                    selected={!this.state.hasDishwasher}
                    onClick={() => this.toggleHasDishwasher(false)}
                />
                <BackNextButton 
                    onClickBack={this.props.goToPrevPage}
                    onClickNext={this.handleClickNext}
                />
            </SPageContainer>
        )
    }
}