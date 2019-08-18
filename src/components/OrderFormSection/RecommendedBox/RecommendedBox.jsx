import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { OrderDetails } from './Components/OrderDetails/OrderDetails';
import { SPageTitle } from './../../commons/StyledComponents';
import { SBoxPageContainer, SOrderSummary, SOrderHeadline, SOrderPrice, SOrderButton, SSubText } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClickOrder = () => {
        this.props.goToNextPage();
    }

    render(){
        console.log(this.props.recommendedBox);
        const { recommendedBox, numberOfPeople } = this.props;
        const { price, items } = recommendedBox;
        return (
            <SBoxPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Your first juggle box!</SPageTitle>
                <SOrderSummary>
                    <SOrderHeadline>Monthly for {numberOfPeople}</SOrderHeadline>
                    <SOrderPrice>£{price / 100}pp</SOrderPrice>
                </SOrderSummary>
                <SOrderButton onClick={this.handleClickOrder}>Order now</SOrderButton>
                <OrderDetails items={items}/>
                <SSubText>Our algorithm calculates the perfect box based on average household usage per person. It's easy to adjust your amounts once you start!</SSubText>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.props.goToNextPage}/>
            </SBoxPageContainer>
        )
    }
}

