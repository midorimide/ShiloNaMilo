import { connect } from 'react-redux'
import { getAllServices } from './Actions'
import { areServicesLoadingSelector, servicesSelector } from './Reducer'
import ServicesScreen from './Screen';

const mapStateToProps = (state) => ({
	areServicesLoading: areServicesLoadingSelector(state),
	services: servicesSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getAllServices: () => dispatch(getAllServices())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServicesScreen)