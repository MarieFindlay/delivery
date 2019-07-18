import React from "react";
import GLOBALS from './../../globals';
import styled from 'styled-components'

export const Button = ({ text, handleClick, color, size, isSelected }) => {
    return (
        <SButton isSelected={isSelected} size={size} color={color} onClick={handleClick}>{text}</SButton>
    )
}

export const SButton = styled.div`
    background-color: ${props => props.color  ? props.color : GLOBALS.COLORS.CREAM};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    height: ${props => props.height  ? props.height : GLOBALS.DIMENSIONS.RESP_MARGIN * 2};
    border-radius: ${GLOBALS.DIMENSIONS.BORDER_RADIUS};
    border: ${props => props.isSelected ? `solid 3px ${GLOBALS.COLORS.MUTED_CRIMSON}` : ''};
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    color: ${GLOBALS.COLORS.CRIMSON};
    width: ${props => props.size && props.size === 'large' ? '60vw' : '100%'};
    line-height: ${props => props.size && props.size === 'large' ? '90px' : '50px'};
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
    font-weight: 300;
`

