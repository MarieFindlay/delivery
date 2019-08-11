import React from "react";
import { SButton } from "./Button";
import styled from 'styled-components';
import { SText } from './StyledComponents';
import GLOBALS from './../../globals';

const CardButton = ({ onClick, title, subtitle, selected }) => {
    return (
        <SCardButton selected={selected} onClick={onClick}>
            <SCardTitle>{title}</SCardTitle>
            <SCardSubtitle>{subtitle}</SCardSubtitle>
        </SCardButton>
    )
}

export default CardButton;

const selectedBorderStyle = `${GLOBALS.COLORS.MUTED_CRIMSON} solid 2px`;
const unselectedBorderStyle = 'transparent solid 2px';

const SCardButton = styled(SButton)`
    width: 100%;
    border: ${props => props.selected ? selectedBorderStyle : unselectedBorderStyle};
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
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