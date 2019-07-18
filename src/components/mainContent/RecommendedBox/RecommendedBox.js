import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'

import GLOBALS from './../../../globals';

import { SPageTitle, SText, SPageContainer } from './../../commons/StyledComponents'
import CardButton from './../../commons/CardButton';
import { SButton } from './../../commons/Button';
import BackButton from './../../commons/BackButton';

import { nextPage, addItemsToBasket } from './../../../actions/actions';

const dummyItems = [
    {
        amount: 1,
        quantifiedName: "bottle of washing up liquid",
    },
    {
        amount: 14,
        quantifiedName: "laundry tablets",
    },
    {
        amount: 8,
        quantifiedName: "sponges",
    },
    {
        amount: 16,
        quantifiedName: "toilet rolls",
    }
]

const OrderDetails = ({ items }) => {
    return (
        <SOrderDetails>
            {items.map(item => {
                return <SText>{item.amount} {item.quantifiedName}</SText>
            })}
        </SOrderDetails>
    )
    
}


export class RecommendedBoxInner extends React.Component {
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
  
const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        addItemsToBasket: (itemIds) => dispatch(addItemsToBasket(itemIds))
    };
};

export const RecommendedBox =  connect(undefined, mapDispatchToProps)(RecommendedBoxInner);

const SBoxPageContainer = styled(SPageContainer)`
    padding-top: 8vh;
`

const SOrderSummary = styled.div`
    margin-bottom: 4vh;
    padding-bottom: 0;
`

const SOrderHeadline = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
`

const SOrderButton = styled(SButton)`
    background-color: ${GLOBALS.COLORS.PURPLE};
    color: ${GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    font-weight: 300;
`

const SOrderPrice = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    margin-bottom: 0;
    margin-top: 2vh;
`

const SOrderDetails = styled.div`
    margin-top: 2vh;
    background-color: ${GLOBALS.COLORS.CREAM};
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 2vh;
`

const SSubText = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_TINY};
`