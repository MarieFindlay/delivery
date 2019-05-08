import React from "react";
import { SClickableText } from "./StyledComponents";

const NextButton = ({ onClick }) => {
    return (
        <SClickableText onClick={onClick}>next</SClickableText>
    )
}

export default NextButton;