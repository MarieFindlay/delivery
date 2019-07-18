import React from "react";
import { connect } from "react-redux";
import GLOBALS from './../../../globals';
import { AmountPicker } from './AmountPicker';
import NextButton from './../../commons/NextButton';
import { SPageTitle, SPageContainer, SText } from './../../commons/StyledComponents';
import { SGroupImage } from './Styles';
import { nextPage, addItemsToBasket } from './../../../actions/actions';

export class ChoosePeopleInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItemIds: [] };
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>For how many people?</SPageTitle>
                <SGroupImage src={GLOBALS.IMAGES.GROUP}/>
                <AmountPicker/>
                <SText>Tell us how many in your house and we’ll recommend the perfect box.</SText>
                <NextButton onClick={this.handleClickNext}/>
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

export const ChoosePeople =  connect(undefined, mapDispatchToProps)(ChoosePeopleInner);

