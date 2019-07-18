import React from "react";
import GLOBALS from './../../../globals';
import BackButton from './../../commons/BackButton';
import { OrderDetails } from './Components/OrderDetails/OrderDetails';
import { SPageTitle } from './../../commons/StyledComponents';
import { SBoxPageContainer, SOrderSummary, SOrderHeadline, SOrderPrice, SOrderButton, SSubText } from './styled';
import { dummyItems } from '../../../data/dummyData';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <SBoxPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Your first juggle box!</SPageTitle>
                <SOrderSummary>
                    <SOrderHeadline>Monthly for 2</SOrderHeadline>
                    <SOrderPrice>£14pp</SOrderPrice>
                </SOrderSummary>
                <SOrderButton>Order now</SOrderButton>
                <OrderDetails items={dummyItems}/>
                <SSubText>Our algorithm calculates the perfect box based on average household usage per person. It's easy to adjust your amounts once you start!</SSubText>
                <BackButton onClickBack={() => console.log('click back')} onClickNext={() => console.log('click next')}/>
            </SBoxPageContainer>
        )
    }
}

