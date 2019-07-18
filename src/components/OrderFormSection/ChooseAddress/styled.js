import styled from 'styled-components';
import GLOBALS from './../../../globals';

export const SSelect = styled.select`
    box-sizing: border-box;
    width: 100%;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_SMALL};
    line-height: 40px;
    padding-left: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 15px;
    background-color: white;
    border: none;
    text-align: center;
    border-radius: inherit;
`

export const SForm = styled.form`
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
`