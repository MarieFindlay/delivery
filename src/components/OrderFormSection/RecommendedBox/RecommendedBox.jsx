import React from "react";
import GLOBALS from './../../../globals';
import BackNextButton from './../../commons/BackNextButton';
import { OrderDetails } from './Components/OrderDetails/OrderDetails';
import { SPageContainer, SPageContents, SPageTitle, SInnerContents } from './../../commons/StyledComponents';
import { SOrderSummary, SOrderHeadline, SOrderPrice, SOrderButton, SSubText } from './styled';
import { getRecommendedBox } from './../../../utils/pricePlanUtils';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxLoading: true,
            errorMessage: null,
            recommendedBox: {
                items: [],
                price: 0
            }
        };
    }

    componentDidMount = async() => {
        const { hasDishwasher, includeToiletries, numberOfPeople } = this.props;
        try {
            const result = await getRecommendedBox(includeToiletries, hasDishwasher, numberOfPeople);
            this.setState({
                recommendedBox: result,
                boxLoading: false,
            })
        } catch (error) {
            this.setState({
                errorMessage: error.message,
                boxLoading: false,
            })
        }

    }

    handleClickOrder = () => {
        this.props.goToNextPage();
    }

    render() {
        const { numberOfPeople } = this.props;
        const { price, items } = this.state.recommendedBox;
        return (
            <SPageContainer color={GLOBALS.COLORS.BEIGE}>
                    <SPageContents>
                    {this.state.boxLoading &&
                        <SPageTitle>Box loading...</SPageTitle>
                    }
                    {!this.state.boxLoading && this.state.errorMessage &&
                        <>
                            <SInnerContents>
                                <SSubText>{`Sorry, there was a problem calculating your box: ${this.state.errorMessage}`}</SSubText>
                            </SInnerContents>
                        </>
                    }
                    {!this.state.boxLoading &&
                        <> 
                            <SPageTitle>Your first juggle box!</SPageTitle>
                            <SInnerContents>
                                
                                <SOrderSummary>
                                    <SOrderHeadline>Monthly for {numberOfPeople}</SOrderHeadline>
                                    <SOrderPrice>£{Math.round(price / numberOfPeople) / 100}pp</SOrderPrice>
                                </SOrderSummary>
                                <OrderDetails items={items}/>
                                <SOrderButton onClick={this.handleClickOrder}>Order now</SOrderButton>
                                <SSubText>Our algorithm calculates the perfect box based on average household usage per person. It's easy to adjust your amounts once you start!</SSubText>
                            </SInnerContents>
                            <BackNextButton onClickBack={this.props.goToPrevPage} onClickNext={this.props.goToNextPage}/>
                        </>
                    }
                </SPageContents>
            </SPageContainer>
        )
    }
}

