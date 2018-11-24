import { connect } from 'react-redux'
import Screen  from './Screen'
import { getServices } from './Actions'
import { isLoadingSelector, getServicesSelector } from './Reducer'

const mapStateToProps = (state) => ({

	servicesLoading: isLoadingSelector(state),
	services: getServicesSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getServices: () => dispatch(getServices())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Screen)