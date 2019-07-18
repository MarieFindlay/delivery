import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

import GLOBALS from './../../../globals';

import { SContainer, SPageTitle, SPageContainer, SInput, SButton, SText } from './../../commons/StyledComponents';
import BackNextButton from './../../commons/BackNextButton';

import { nextPage, updateAddress } from './../../../actions/actions';

import { getAddressesByPostcode } from './../../../utils/utils';

class ChooseAddressInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postcode: '',
            addresses: null,
            selectedAddress: '',
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
        console.log('in function');
        this.props.updateAddress(this.state.selectedAddress, this.state.postcode);
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
                <BackNextButton onClick={this.handleClickNext}/>
            </SPageContainer>
        )
    }
}

const SSelect = styled.select`
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

const SForm = styled.form`
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
`

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAddress: (address, postcode) => dispatch(updateAddress(address, postcode)),
        goToNextPage: () => dispatch(nextPage())
     }
}

export const ChooseAddress = connect(mapStateToProps, mapDispatchToProps)(ChooseAddressInner);