import React from "react";
import { SNextButton } from './NextButton';

const BackButton = ({ onClick }) => {
    return (
        <SNextButton onClick={onClick}>back</SNextButton>
    )
}

export default BackButton;