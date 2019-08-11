import React from "react";
import { SAmountPickerContainer, SPlusMinusButton, SLabel, SMiddlePanel, SAmount } from './styled'

const AmountPicker = ({ number, handleClickPlus, handleClickMinus }) => {
    return (
        <SAmountPickerContainer>
            <SPlusMinusButton onClick={handleClickMinus}>
                <SLabel>-</SLabel>
            </SPlusMinusButton>
            <SMiddlePanel>
                <SAmount>{number}</SAmount>
            </SMiddlePanel>
            <SPlusMinusButton onClick={handleClickPlus}>
                <SLabel>+</SLabel>
            </SPlusMinusButton>
        </SAmountPickerContainer>
    )
}

export default AmountPicker;