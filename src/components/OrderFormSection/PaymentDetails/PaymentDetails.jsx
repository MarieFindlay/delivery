import React from "react";
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './Components/CheckoutForm';
import GLOBALS from './../../../globals';
import { SPageContainer, SPageTitle } from './../../commons/StyledComponents';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handlePaymentComplete = () => {
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Last thing! How would you like to pay?</SPageTitle>
                <StripeProvider apiKey={GLOBALS.API_KEYS.STRIPE}>
                    <Elements>
                        <CheckoutForm handlePaymentComplete={this.handlePaymentComplete}/>
                    </Elements>
                </StripeProvider>
            </SPageContainer>
        )
    }
}