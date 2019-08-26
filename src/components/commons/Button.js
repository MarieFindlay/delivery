import React from "react";
import GLOBALS from './../../globals';
import styled from 'styled-components'

export const Button = ({ text, handleClick, color, size, selected }) => {
    return (
        <SButton selected={selected} size={size} color={color} onClick={handleClick}>{text}</SButton>
    )
}

export const SButton = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Actor&display=swap');
    font-family: 'Actor', sans-serif;
    background-color: ${props => props.color  ? props.color : GLOBALS.COLORS.CREAM};
    font-size: ${props => props.size && props.size === 'large' ? GLOBALS.DIMENSIONS.FONT_SIZE_BIG : GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    border-radius: ${GLOBALS.DIMENSIONS.BORDER_RADIUS};
    border: ${props => props.isSelected ? `solid 3px ${GLOBALS.COLORS.MUTED_CRIMSON}` : ''};
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    color: ${GLOBALS.COLORS.CRIMSON};
    box-shadow: ${GLOBALS.EFFECTS.SHADOW};
    font-weight: 300;
    cursor: pointer;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px 0;
`

