import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

import GLOBALS from './../../../globals';

import { SText } from './../../commons/StyledComponents';
import { SButton } from './../../commons/Button';
import { increaseQuantity, decreaseQuantity } from './../../../actions/actions';

const ItemAmountPickerInner = ({ item, quantity, increaseQuantity, handleClickPlus, handleClickMinus }) => {
    return (
        <SItemContainer>
            <SItemImage src={item.image} />
            <SMiddlePanel>
                <SItemAmount>{quantity} x {item.unit}</SItemAmount>
                <SItemLabel>{item.name}</SItemLabel>
            </SMiddlePanel>
            <SQuantityButtons>
                <SPlusMinusButton onClick={id => handleClickPlus(item.id)}>+</SPlusMinusButton>
                <SPlusMinusButton onClick={id => handleClickMinus(item.id)}>–</SPlusMinusButton>
            </SQuantityButtons>
        </SItemContainer>
    )
}

const SPlusMinusButton = styled(SButton)`
    width: 100%;
    height: 48%;
    text-align: center;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    justify-content: center;
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center;
    background-color: white;
`

const SItemContainer = styled.div`
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: space-between;
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

const SMiddlePanel = styled.div`
    display: flex;
    width: 58%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${GLOBALS.COLORS.MUTED_BEIGE};
`

const SQuantityButtons = styled.div`
    display: flex;
    justify-self: flex-end;
    flex-direction: column;
    width: 20%;
    justify-content: space-between;
`

const SItemImage = styled.img`
    width: 20%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
`

const SItemAmount = styled(SText)`
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL};
    text-align: center;
`

const SItemLabel = styled(SText)`
    color: ${GLOBALS.COLORS.MUTED_CRIMSON};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_TINY};
    text-align: center;
`

const mapDispatchToProps = dispatch => {
    return {
        increaseQuantity: itemId => dispatch(increaseQuantity(itemId)),
        decreaseQuantity: itemId => dispatch(decreaseQuantity(itemId))
    }
}

export const ItemAmountPicker = connect(undefined, mapDispatchToProps)(ItemAmountPickerInner);