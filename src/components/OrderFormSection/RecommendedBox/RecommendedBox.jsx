import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { OrderDetails } from './Components/OrderDetails/OrderDetails';
import { SPageTitle } from './../../commons/StyledComponents';
import { SBoxPageContainer, SOrderSummary, SOrderHeadline, SOrderPrice, SOrderButton, SSubText } from './styled';
import { getRecommendedBox } from './../../../utils/utils';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxLoading: true,
            recommendedBox: {
                items: [],
                price: 0
            }
        };
    }

    componentDidMount = async() => {
        const { hasDishwasher, includeToiletries, numberOfPeople } = this.props;
        const recommendedBox = await getRecommendedBox(includeToiletries, hasDishwasher, numberOfPeople);
        this.setState({
            recommendedBox,
            boxLoading: false,
        })
    }

    handleClickOrder = () => {
        this.props.goToNextPage();
    }

    render() {
        const { numberOfPeople } = this.props;
        const { price, items } = this.state.recommendedBox;
        return (
            <SBoxPageContainer color={GLOBALS.COLORS.BEIGE}>
                {this.state.boxLoading &&
                    <SPageTitle>Box loading...</SPageTitle>
                }
                {!this.state.boxLoading &&
                    <> 
                        <SPageTitle>Your first juggle box!</SPageTitle>
                        <SOrderSummary>
                            <SOrderHeadline>Monthly for {numberOfPeople}</SOrderHeadline>
                            <SOrderPrice>£{price / 100 / 4}pp</SOrderPrice>
                        </SOrderSummary>
                        <SOrderButton onClick={this.handleClickOrder}>Order now</SOrderButton>
                        <OrderDetails items={items}/>
                        <SSubText>Our algorithm calculates the perfect box based on average household usage per person. It's easy to adjust your amounts once you start!</SSubText>
                        <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.props.goToNextPage}/>
                    </>
                }
            </SBoxPageContainer>
        )
    }
}

