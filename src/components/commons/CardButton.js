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
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 4}px 0;
    &:not(:last-child){
        margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
    }
`

const SCardTitle = styled(SText)`
    line-height: 1;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_BIG};
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;

`

const SCardSubtitle = styled(SText)`
    line-height: 1;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_TINY};
`