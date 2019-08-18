import React from "react";
import GLOBALS from './../../../globals';
import { SPageTitle, SPageContainer, SInput, SText } from './../../commons/StyledComponents';
import BackNextButton from './../../commons/BackNextButton';
import { getAddressesByPostcode } from './../../../utils/deliveryDetailsUtils';
import { SForm, SSelect } from './styled';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postcode: this.props.postcodeOnMount,
            addresses: '',
            selectedAddress: this.props.streetAddressOnMount,
            errorMessage: null,
        };
    }

    handleInputChange = (event) => {
        this.setState({
            postcode: event.target.value,
        })
    }

    handleFindMyAddress = async (event) => {
        event.preventDefault();
        //TO DO: fix error handling
        try {
            const addresses = await getAddressesByPostcode(this.state.postcode);
            this.setState({
                addresses
            })
        } catch (error) {
            this.setState({
                errorMessage: error.message
            })
        }
        
        // // use dummy addresses below when not directly testing API
        // const addresses = ['address 1', 'address 2', 'address 3'];
        // this.setState({
        //     addresses
        // })
    }

    handleSelectAddress = (event) => {
        this.setState({
            selectedAddress: event.target.value,
        })
    }

    handleClickNext = () => {
        this.props.updateAddress(this.state.postcode, this.state.selectedAddress);
        this.props.goToNextPage();
    }

    render(){
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>Where shall we deliver?</SPageTitle>
                <SForm onSubmit={this.handleFindMyAddress}>
                    <SInput type="text" placeholder={`Type your postcode`} value={this.state.postcode} onChange={this.handleInputChange}/>
                </SForm>
                {this.state.errorMessage && <SText>Sorry, we couldn't find that postcode, or you've lost network connection. Try again or get in touch if we've made a mistake!</SText>}
                {this.state.addresses && (
                    <SSelect onChange={this.handleSelectAddress} name="addresses">
                        <option value="" default>Choose your address...</option>
                        {this.state.addresses.map(address =>
                            <option value={address}>{address}</option>
                        )}
                    </SSelect>
                )}
                <BackNextButton onClickNext={this.handleClickNext} onClickBack={this.props.goToPrevPage}/>
            </SPageContainer>
        )
    }
}