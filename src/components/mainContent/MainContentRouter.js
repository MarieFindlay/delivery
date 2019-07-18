import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ChoosePeople } from './ChoosePeople/ChoosePeople';
import { ChooseToiletries } from './ChooseToiletries/ChooseToiletries';
import { ChooseDishwasher } from './ChooseDishwasher/ChooseDishwasher';
import { RecommendedBox } from './RecommendedBox/RecommendedBox';
import { ChooseDates } from './ChooseDates/ChooseDates';
import { ChooseAddress } from './ChooseAddress/ChooseAddress';

const MainContentInner = ({ pageNumber }) => {
  switch(pageNumber) {
    case 0:
        return <ChoosePeople/>
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
    default:
        return <ChoosePeople/>
  } 
}

MainContentInner.propTypes = {
    pageNumber: PropTypes.number.isRequired
  }
  
const mapStateToProps = state => ({
    pageNumber: state.currentPage,
  });


export const MainContentRouter =  connect(mapStateToProps)(MainContentInner);