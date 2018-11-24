import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import ServiceList from '../../components/ServiceList'

class ServicesScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getServices()
	}

	render() {
		if (this.props.servicesLoading) {
            return (
				<View>
					<Text>Loading</Text>
				</View>
			)			
		}
		else {	
			console.log('AAAAAAAAAAAAAAAAAAAAAA')
			console.log(this.props.services)		
			return (
				<ServiceList items={this.props.services}/>
			)
		}
	}
}

ServicesScreen.propTypes = {
	services: PropTypes.array,
	getServices: PropTypes.func,
	servicesLoading: PropTypes.bool
}

export default ServicesScreen