import React from "react";
import styled from 'styled-components';

import GLOBALS from './../../../globals';
import { SText } from './../../commons/StyledComponents';

export const Item = ({ item, handleClick, isSelected }) => {
    return (
        <SItemContainer isSelected={isSelected} onClick={(id) => handleClick(item.id)}>
            <SItemImage isSelected={isSelected} src={item.image} />
            <SItemLabel>{item.name}</SItemLabel>
        </SItemContainer>
    )
}

const SItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-content: center;
    text-align: center;
    padding-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 4}px;
`

const SItemImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    border: ${props => props.isSelected ? `solid 3px ${GLOBALS.COLORS.MUTED_CRIMSON}` : 'solid 3px transparent'};
`

const SItemLabel = styled(SText)`
    color: ${GLOBALS.COLORS.MUTED_CRIMSON};
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALLEST};
`