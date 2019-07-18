import React from "react";
import { SAmountPickerContainer, SPlusMinusButton, SLabel, SMiddlePanel, SAmount } from './styled'

const AmountPicker = ({ item, quantity, increaseQuantity, handleClickPlus, handleClickMinus }) => {
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

export default AmountPicker;