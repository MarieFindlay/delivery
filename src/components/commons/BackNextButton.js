import React from "react";
import { SButton } from "./Button";
import styled from 'styled-components';
import GLOBALS from './../../globals';

const BackNextButton = ({ onClickNext, onClickBack }) => {
    return (
        <SBackNextButton>
            <SNextButton onClick={onClickBack}>back</SNextButton>
            <SNextButton onClick={onClickNext}>next</SNextButton>
        </SBackNextButton>
    )
}

export default BackNextButton;

const SBackNextButton = styled.div`
    display: flex;
    width: 90%;
    justify-self: center;
    align-self: center;
    justify-content: space-between;
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
`

const SNextButton = styled(SButton)`
    width: 49%;  
    background-color: ${GLOBALS.COLORS.MUTED_BEIGE};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    padding-top: 2vh;
    padding-bottom: 2vh;
`