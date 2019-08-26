import React from "react";
import { SButton } from "./Button";
import styled from 'styled-components';
import GLOBALS from './../../globals';

const NextButton = ({ onClick }) => {
    return (
        <SNextButton onClick={onClick}>next</SNextButton>
    )
}

export default NextButton;

export const SNextButton = styled(SButton)`
    width: 70%;
    background-color: ${GLOBALS.COLORS.MUTED_BEIGE};
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
`