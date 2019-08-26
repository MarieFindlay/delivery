import React from "react";
import GLOBALS from './../../../globals';
import { SPageContainer, SText} from './../../commons/StyledComponents';
import { SOrderCompletePageContents, SOrderCompleteTitle } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleClickNext = () => {
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SOrderCompletePageContents>
                    <SOrderCompleteTitle>Order complete!</SOrderCompleteTitle>
                    <SText>We'll email you shortly to confirm your order details.</SText>
                </SOrderCompletePageContents>
            </SPageContainer>
        )
    }
}