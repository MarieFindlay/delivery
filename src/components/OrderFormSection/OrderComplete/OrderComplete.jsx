import React from "react";
import GLOBALS from './../../../globals';
import { SPageContainer, SPageTitle, SInput, SText } from './../../commons/StyledComponents';

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
                <SPageTitle>Order complete!</SPageTitle>
                <SText>We'll email you shortly to confirm your order details.</SText>
            </SPageContainer>
        )
    }
}