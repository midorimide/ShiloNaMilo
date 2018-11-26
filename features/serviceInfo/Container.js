import { connect } from 'react-redux'
import { isLoadingSelector, getServiceInfoSelector } from './Reducer';
import { getServiceById } from './Actions';
import ServiceInfoScreen from './Screen';

const mapStateToProps = (state) => ({
	servicesLoading: isLoadingSelector(state),
	service: getServiceInfoSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getServiceById: (id) => dispatch(getServiceById(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceInfoScreen)