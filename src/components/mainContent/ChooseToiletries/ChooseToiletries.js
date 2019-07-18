import React from "react";
import { connect } from "react-redux";

import GLOBALS from './../../../globals';

import { SPageTitle, SPageContainer, SText } from './../../commons/StyledComponents'
import CardButton from './../../commons/CardButton';
import BackNextButton from './../../commons/BackNextButton';

import { nextPage, addItemsToBasket } from './../../../actions/actions';


export class ChooseToiletriesInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItemIds: [] };
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Do you need toiletries?</SPageTitle>
                <CardButton title="Yes" subtitle="add toiletries for minimal fuss"/>
                <CardButton title="No" subtitle="stick to household essentials"/>
                <BackNextButton onClickBack={() => console.log('click back')} onClickNext={() => console.log('click next')}/>
            </SPageContainer>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        addItemsToBasket: (itemIds) => dispatch(addItemsToBasket(itemIds))
    };
};

export const ChooseToiletries =  connect(undefined, mapDispatchToProps)(ChooseToiletriesInner);



