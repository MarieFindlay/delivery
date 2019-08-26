import styled from 'styled-components';
import GLOBALS from './../../../../globals';

export const SPayButton = styled.button`
    width: 49%;  
    background-color: ${GLOBALS.COLORS.MUTED_BEIGE};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    font-weight: 300;
    cursor: pointer;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    font-family: 'Actor', sans-serif;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

export const SButtonContainer = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`;

export const SInvisibleButtonDiv = styled.div`
    height: 0px;
`

export const pageContentStyles = {
    display: 'flex', 
    flex: 1, flexDirection: 'column',
    justifyContent: 'space-between',
}