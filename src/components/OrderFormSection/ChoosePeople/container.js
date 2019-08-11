import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { nextPage, updateNumberOfPeople } from './../../../actions/actions';
import ChoosePeople from './ChoosePeople';

ChoosePeople.propTypes = {
    numberOfPeople: PropTypes.number.isRequired,
    goToNextPage: PropTypes.func.isRequired,
    updateNumberOfPeople: PropTypes.func.isRequired,
}
  
const mapStateToProps = state => ({
    numberOfPeopleOnMount: state.numberOfPeople,
  });

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        updateNumberOfPeople: (number) => dispatch(updateNumberOfPeople(number)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePeople);