import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

import GLOBALS from './../../../globals';
import { availableItems, regularities } from './../../../data';
import { getBasketItemIdArrFromObj, getItemById, getQuantityById } from './../../../utils/utils';

import { SContainer, SPageTitle } from './../../commons/StyledComponents';
import { Button } from './../../commons/Button';
import NextButton from './../../commons/NextButton';
import { ItemAmountPicker } from './ItemAmountPicker';

import { updateQuantities, nextPage, updateQuantitiesAndSchedule } from './../../../actions/actions';

class ChooseAmountsPageInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemQuantitiesById: {},
            selectedRegularity: null,
        };
    }

    componentDidMount() {
        this.setState({
            itemQuantitiesById: this.props.itemQuantitiesById,
            selectedRegularity: this.props.regularity,
        })
    }

    handleUpdateRegularity = (regularity) => {
        this.setState({
            selectedRegularity: regularity
        })
    }

    handleIncreaseQuantity = (itemId) => {
        this.setState({
            itemQuantitiesById: {
                ...this.state.itemQuantitiesById,
                [itemId]: this.state.itemQuantitiesById[itemId] + 1
            }
        })
    }

    handleDecreaseQuantity = (itemId) => {
        if (this.state.itemQuantitiesById[itemId] === 0) return;
        this.setState({
            itemQuantitiesById: {
                ...this.state.itemQuantitiesById,
                [itemId]: this.state.itemQuantitiesById[itemId] - 1
            }
        })
    }

    handleClickNext = () => {
        this.props.updateQuantitiesAndSchedule(this.state.itemQuantitiesById, this.state.selectedRegularity);
        this.props.goToNextPage();
    }

    render(){
        const { itemQuantitiesById, selectedRegularity } = this.state;
        const basketItems = getBasketItemIdArrFromObj(itemQuantitiesById);

        return (
            <SContainer color={GLOBALS.COLORS.BEIGE}>
                <SPageTitle>how often?</SPageTitle>
                <SScheduleContainer>
                    {regularities.map(option => {
                        return (
                        <SButtonContainer>
                            <Button 
                                handleClick={() => this.handleUpdateRegularity(option)}
                                text={option === 1 ? `Every month` : `Every ${option} months`}
                                color={'white'}
                                isSelected={option === selectedRegularity}
                                key={option}/>
                        </SButtonContainer>
                        )
                    })}
                </SScheduleContainer>
                <SItemsContainer>
                    {basketItems.map(id => {
                        const item = getItemById(id, availableItems);
                        const quantity = getQuantityById(id, itemQuantitiesById);
                        return <ItemAmountPicker handleClickPlus={this.handleIncreaseQuantity} handleClickMinus={this.handleDecreaseQuantity} item={item} quantity={quantity} key={id}/>
                    })}
                </SItemsContainer>
                <NextButton onClick={this.handleClickNext}/>
            </SContainer>
        )
    }
}

const SScheduleContainer = styled.div`
    margin-top: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

const SButtonContainer = styled.div`
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 5}px;
`

const SItemsContainer = styled.div`
    margin-bottom: ${GLOBALS.DIMENSIONS.MARGIN / 2}px;
`

const mapStateToProps = state => {
    return {
        itemQuantitiesById: state.basket.itemQuantitiesById,
        regularity: state.basket.regularity,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateQuantities: (quantitiesById) => dispatch(updateQuantities(quantitiesById)),
        goToNextPage: () => dispatch(nextPage()),
        updateQuantitiesAndSchedule: (quantitiesById, selectedRegularity) => dispatch(updateQuantitiesAndSchedule(quantitiesById, selectedRegularity)),
     }
}

export const ChooseAmountsPage = connect(mapStateToProps, mapDispatchToProps)(ChooseAmountsPageInner);