import React from "react";
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './Components/CheckoutForm';
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { SPageContainer, SPageTitle, SInput } from './../../commons/StyledComponents';
import { SExtraCardDetails, SSmallInput, SLongCardNumber } from './styled';

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
                <StripeProvider apiKey="pk_test_uGLYOYBuOKBYFlqIcY7RFcc600aGtHolkS">
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </StripeProvider>
                <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}