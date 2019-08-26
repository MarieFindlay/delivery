import styled from 'styled-components';
import GLOBALS from './../../../globals';

export const SSelect = styled.select`
    appearance: none;
    box-sizing: border-box;
    width: 100%;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL};
    background-color: white;
    border: none;
    text-align: center;
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
    font-family: 'Actor';
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
    border-radius: ${GLOBALS.DIMENSIONS.BORDER_RADIUS};
`

export const SForm = styled.form`
    width: 100%;
`