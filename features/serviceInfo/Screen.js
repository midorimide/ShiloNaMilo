import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'
import Star from 'react-native-star-view'
import { withNavigation } from 'react-navigation';

class ServiceInfoScreen extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getServiceById(this.props.navigation.getParam('id', 0))
	}

	render(){
		if (this.props.isServiceLoading){
			return(
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large"/>
				</View>
			)
		}

		if (this.props.service.mark < 0){
			this.props.service.mark = 0
		}
		if (this.props.service.mark > 5){
			this.props.service.mark = 5
		}

		let userDisplay = Component
		if (this.props.isUserLoading){
			userDisplay = <ActivityIndicator size="small"/>
		} else {
			let username = "Default user"
			if (this.props.user.username !== undefined){
				username = this.props.user.username
			}
			userDisplay = <Text>by {username}</Text>
		}

		return (
			<View>
				<Text>{this.props.service.name}</Text>
				{userDisplay}
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
	isServiceLoading: PropTypes.bool,
	isUserLoading: PropTypes.bool,
	service: PropTypes.object,
	user: PropTypes.object,
	getServiceById: PropTypes.func
}

export default withNavigation(ServiceInfoScreen)