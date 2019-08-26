import React from "react";
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './Components/CheckoutForm';
import GLOBALS from './../../../globals';
import { SPageContainer, SPageContents, SPageTitle } from './../../commons/StyledComponents';

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
                <SPageContents>
                    <StripeProvider apiKey={GLOBALS.API_KEYS.STRIPE}>
                        <Elements>
                            <CheckoutForm 
                                handlePaymentComplete={this.handlePaymentComplete}
                                goToPrevPage={this.props.goToPrevPage}
                                subscriptionData={this.props.subscriptionData}
                                subscriptionMetaData={this.props.subscriptionMetaData}
                            />
                        </Elements>
                    </StripeProvider>
                </SPageContents>
            </SPageContainer>
        )
    }
}