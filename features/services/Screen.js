import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import ServiceList from '../../components/ServiceList'

export default class ServicesScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getAllServices()
	}

	render() {
		if (this.props.isLoading) {
            return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size='large'/>
				</View>
			)
		}
		else {
			return (
				<ServiceList items={this.props.services}/>
			)
		}
	}
}

ServicesScreen.propTypes = {
	isLoading: PropTypes.bool,
	services: PropTypes.array,
	getAllServices: PropTypes.func
}