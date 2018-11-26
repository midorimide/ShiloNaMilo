import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Star from 'react-native-star-view'
import { withNavigation } from 'react-navigation';

class ServiceInfoScreen extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getServiceById(this.props.navigation.getParam('id', 0))
		console.log(this.props.service)
	}

	render(){
		if (this.props.isLoading){
			return(
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Loading</Text>
				</View>
			)
		}

		if (this.props.service.mark < 0){
			this.props.service.mark = 0
		}
		if (this.props.service.mark > 5){
			this.props.service.mark = 5
		}
		return (
			<View>
				<Text>{this.props.service.name}</Text>
				<Text>by {this.props.service.user_id}</Text>
				<Text>Category: {this.props.service.category}</Text>
				<Text>Description:</Text>
				<Text>{this.props.service.description}</Text>
                <Star score={this.props.service.mark}/>
				<Text>Voted: {this.props.service.mark_amount}</Text>
			</View>
		);
	}
}

ServiceInfoScreen.propTypes = {
	isLoading: PropTypes.bool,
	service: PropTypes.object,
	getServiceById: PropTypes.func
}

export default withNavigation(ServiceInfoScreen)