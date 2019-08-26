import styled from 'styled-components';
import GLOBALS from './../../../../globals';
import { SText } from '../../../commons/StyledComponents';

export const cardElementClass = 'card-element-class';

export const SPayButton = styled.button`
    width: 49%;  
    background-color: ${GLOBALS.COLORS.MUTED_BEIGE};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    font-weight: 300;
    cursor: pointer;
    font-size: ${GLOBALS.DIMENSIONS.FONT_SIZE_MEDIUM};
    font-family: 'Actor', sans-serif;
    padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px;
    color: ${GLOBALS.COLORS.CRIMSON};
    :disabled: {
        color: gray;
    }
`

export const SButtonContainer = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
`;

export const SInvisibleButtonDiv = styled.div`
    height: 0px;
`

export const pageContentStyles = {
    display: 'flex', 
    flex: 1, flexDirection: 'column',
    justifyContent: 'space-between',
    color: GLOBALS.COLORS.CRIMSON,
}

export const SForm = styled.form`
    width: 100%;
    .${cardElementClass} {
        background: white;
        padding: ${GLOBALS.DIMENSIONS.MARGIN / 5 * 2}px ${GLOBALS.DIMENSIONS.MARGIN / 5}px
        border-radius: ${GLOBALS.DIMENSIONS.BORDER_RADIUS};
        box-shadow: ${GLOBALS.EFFECTS.INSET_SHADOW};
    }
`

export const SErrorText = styled(SText)`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`