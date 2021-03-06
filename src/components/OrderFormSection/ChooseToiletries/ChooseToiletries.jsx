import React from "react";
import GLOBALS from './../../../globals';
import CardButton from './../../commons/CardButton';
import BackNextButton from './../../commons/BackNextButton';
import { SPageTitle, SPageContainer, SPageContents, SInnerContents } from './../../commons/StyledComponents';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            includeToiletries: this.props.includeToiletriesOnMount,
         };
    }

    handleClickNext = () => {
        this.props.updateIncludeToiletries(this.state.includeToiletries);
        this.props.goToNextPage();
    }

    toggleIncludeToiletries = (trueOrFalse) => {
        this.setState({
            includeToiletries: trueOrFalse,
        })
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageContents>
                    <SPageTitle>Do you need toiletries?</SPageTitle>
                        <SInnerContents>
                            <CardButton
                                title="Yes"
                                subtitle="add toiletries for minimal fuss"
                                selected={this.state.includeToiletries} 
                                onClick={() => this.toggleIncludeToiletries(true)}
                            />
                            <CardButton 
                                title="No"
                                subtitle="stick to household essentials"
                                selected={!this.state.includeToiletries}
                                onClick={() => this.toggleIncludeToiletries(false)}
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



