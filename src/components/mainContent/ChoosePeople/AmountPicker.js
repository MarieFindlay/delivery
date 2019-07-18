import React from "react";
import { connect } from 'react-redux';

import { SAmountPickerContainer, SPlusMinusButton, SLabel, SMiddlePanel, SAmount } from './Styles'

import { increaseQuantity, decreaseQuantity } from './../../../actions/actions';

const AmountPickerInner = ({ item, quantity, increaseQuantity, handleClickPlus, handleClickMinus }) => {
    return (
        <SAmountPickerContainer>
            <SPlusMinusButton onClick={id => handleClickPlus(item.id)}>
                <SLabel>-</SLabel>
            </SPlusMinusButton>
            <SMiddlePanel>
                <SAmount>1</SAmount>
            </SMiddlePanel>
            <SPlusMinusButton onClick={id => handleClickMinus(item.id)}>
                <SLabel>+</SLabel>
            </SPlusMinusButton>
        </SAmountPickerContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        increaseQuantity: itemId => dispatch(increaseQuantity(itemId)),
        decreaseQuantity: itemId => dispatch(decreaseQuantity(itemId))
    }
}

export const AmountPicker = connect(undefined, mapDispatchToProps)(AmountPickerInner);