import { connect } from 'react-redux'
import {
	isServiceLoadingSelector,
	isServiceOwnerLoadingSelector,
	serviceInfoSelector,
	serviceOwnerSelector } from './Reducer';
import { getServiceById } from './Actions';
import ServiceInfoScreen from './Screen';

const mapStateToProps = (state) => ({
	isServiceLoading: isServiceLoadingSelector(state),
	isServiceOwnerLoading: isServiceOwnerLoadingSelector(state),
	serviceInfo: serviceInfoSelector(state),
	serviceOwner: serviceOwnerSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getServiceById: (id) => dispatch(getServiceById(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceInfoScreen)