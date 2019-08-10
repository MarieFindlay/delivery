import { connect } from 'react-redux';
import { nextPage } from './../../../actions/actions';
import ChoosePeople from './ChoosePeople';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
    };
};

export default connect(undefined, mapDispatchToProps)(ChoosePeople);