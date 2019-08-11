import React from "react";
import ChoosePeople from './ChoosePeople/index';
import ChooseToiletries from './ChooseToiletries/index';
import ChooseDishwasher from './ChooseDishwasher/index';
import RecommendedBox from './RecommendedBox/index';
import ChooseDates from './ChooseDates/index';
import ChooseAddress from './ChooseAddress/index';
import PaymentDetails from './PaymentDetails/index';
import ContactDetails from './ContactDetails/index';
import OrderComplete from './OrderComplete/index';

const OrderFormSection = ({ pageNumber }) => {
  switch(pageNumber) {
    case 0:
        return <ChooseDates/>
    case 1:
        return <ChooseToiletries/>
    case 2:
        return <ChooseDishwasher/>
    case 3:
        return <RecommendedBox/>
    case 4:
        return <ChooseDates/>
    case 5:
        return <ChooseAddress/>
    case 6:
        return <PaymentDetails/>
    case 7:
        return <ContactDetails/>
    default:
        return <OrderComplete/>
  } 
}

export default OrderFormSection;