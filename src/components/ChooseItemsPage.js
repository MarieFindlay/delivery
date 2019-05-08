import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from 'styled-components';

import GLOBALS from './../globals';

import { SContainer, SPageTitle } from './commons/StyledComponents';
import NextButton from './commons/NextButton';
import { availableItems } from './../data';
import { Item } from './Item';

import { nextPage, addItemsToBasket } from "./../actions/actions";


export class ChooseItemsPageInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItemIds: [] };
    }

    handleClickItem = clickedItemId => {
        if (this.state.selectedItemIds.includes(clickedItemId)) {
            this.setState({ selectedItemIds: this.state.selectedItemIds.filter(id => id !== clickedItemId)})
        } else this.setState({ selectedItemIds: [...this.state.selectedItemIds, clickedItemId]})
    }

    handleClickNext = async () => {
        await this.props.addItemsToBasket(this.state.selectedItemIds);
        this.props.goToNextPage();
    }

    render(){
        return (
            <SContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>what do you need?</SPageTitle>
                <SItemsContainer>{availableItems.map(item => {
                    return <Item 
                        handleClick={this.handleClickItem}
                        isSelected={this.state.selectedItemIds.includes(item.id)}
                        item={item}
                        key={item.id}/>
                })}</SItemsContainer>
                <NextButton onClick={this.handleClickNext}/>
            </SContainer>
        )
    }
}

const SItemsContainer = styled.div`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 10}px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
  
const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        addItemsToBasket: (itemIds) => dispatch(addItemsToBasket(itemIds))
    };
};

export const ChooseItemsPage =  connect(undefined, mapDispatchToProps)(ChooseItemsPageInner);