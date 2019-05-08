import React from "react";
import GLOBALS from './../../globals';
import styled from 'styled-components'

export const Button = ({ text, handleClick, color, size }) => {
    return (
        <SButton size={size} color={color} onClick={handleClick}>{text}</SButton>
    )
}

export const SButton = styled.div`
    background-color: ${props => props.color  ? props.color : GLOBALS.COLORS.CREAM};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    color: ${GLOBALS.COLORS.CRIMSON};
    width: ${props => props.size && props.size === 'large' ? '60vw' : '100vw'};
    line-height: ${props => props.size && props.size === 'large' && '90px'};
    font-size: ${props => props.size && props.size === 'large' ? GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM : GLOBALS.DIMENSIONS.FONT_SIZE_SMALL};
`

