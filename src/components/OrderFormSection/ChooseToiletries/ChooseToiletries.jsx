import React from "react";
import GLOBALS from './../../../globals';
import CardButton from './../../commons/CardButton';
import BackNextButton from './../../commons/BackNextButton';
import { SPageTitle, SPageContainer } from './../../commons/StyledComponents';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItemIds: [] };
    }

    handleClickNext = () => {
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Do you need toiletries?</SPageTitle>
                <CardButton title="Yes" subtitle="add toiletries for minimal fuss"/>
                <CardButton title="No" subtitle="stick to household essentials"/>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}



