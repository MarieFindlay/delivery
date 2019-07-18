import React from "react";
import GLOBALS from './../../../globals';
import AmountPicker from './Components/AmountPicker/index';
import NextButton from './../../commons/NextButton';
import { SPageTitle, SPageContainer, SText } from './../../commons/StyledComponents';
import { SGroupImage } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItemIds: [] };
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>For how many people?</SPageTitle>
                <SGroupImage src={GLOBALS.IMAGES.GROUP}/>
                <AmountPicker/>
                <SText>Tell us how many in your house and we’ll recommend the perfect box.</SText>
                <NextButton onClick={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}

