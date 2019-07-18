import React from "react";
import { SButton } from "./Button";
import styled from 'styled-components';
import { SText } from './StyledComponents';
import GLOBALS from './../../globals';

const CardButton = ({ onClick, title, subtitle }) => {
    return (
        <SCardButton onClick={onClick}>
            <SCardTitle>{title}</SCardTitle>
            <SCardSubtitle>{subtitle}</SCardSubtitle>
        </SCardButton>
    )
}

export default CardButton;

const SCardButton = styled(SButton)`
    width: 100%;
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    background-color: ${GLOBALS.COLORS.CREAM};
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    padding-bottom: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    padding-right: ${GLOBALS.DIMENSIONS.RESP_MARGIN / 2};
    padding-left: ${GLOBALS.DIMENSIONS.RESP_MARGIN / 2};
`

const SCardTitle = styled(SText)`
    margin-top: 0;
    margin-bottom: 1vh;
    line-height: 1;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};

`

const SCardSubtitle = styled(SText)`
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_TINY};
`