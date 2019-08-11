import React from "react";
import GLOBALS from './../../../globals';
import CardButton from './../../commons/CardButton';
import BackNextButton from './../../commons/BackNextButton';
import { SPageTitle, SPageContainer } from './../../commons/StyledComponents';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount(){
        this.setState({
            includeToiletries: true,
        })
    }

    handleClickNext = () => {
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Do you need toiletries?</SPageTitle>
                <CardButton selected={this.state.includeToiletries} title="Yes" subtitle="add toiletries for minimal fuss"/>
                <CardButton selected={!this.state.includeToiletries} title="No" subtitle="stick to household essentials"/>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}



