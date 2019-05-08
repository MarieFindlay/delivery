import React from "react";
import { connect } from 'react-redux';
import GLOBALS from './../globals';
import styled from 'styled-components';
import { SContainer, SPageTitle } from './commons/StyledComponents';
import NextButton from './commons/NextButton';
import { availableItems } from './../data';
import { ItemWithAmount } from './ItemWithAmount';
import { getBasketItemsArrFromObj, getItemById, getQuantityById } from './../utils/utils';

const ChooseAmountsPageInner = ({ itemQuantitiesById }) => {
    const basketItems = getBasketItemsArrFromObj(itemQuantitiesById);
    return (
        <SContainer color={GLOBALS.COLORS.BEIGE}>
            <SPageTitle>how often?</SPageTitle>
            <SBasketItemsContainer>
                {basketItems.map(id => {
                    const item = getItemById(id, availableItems);
                    const quantity = getQuantityById(id, itemQuantitiesById);
                    return <ItemWithAmount item={item} quantity={quantity} key={id}/>
                })}
            </SBasketItemsContainer>
            <NextButton/>
        </SContainer>
    )
}

const SBasketItemsContainer = styled.div`

`

const mapStateToProps = state => {
    return {
        itemQuantitiesById: state.basket.itemQuantitiesById,
    }
}

export const ChooseAmountsPage = connect(mapStateToProps)(ChooseAmountsPageInner);