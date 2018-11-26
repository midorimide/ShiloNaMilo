import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
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

		if (this.props.serviceInfo.mark < 0){
			this.props.serviceInfo.mark = 0
		}
		if (this.props.serviceInfo.mark > 5){
			this.props.serviceInfo.mark = 5
		}

		let ownerDisplay = Component
		if (this.props.isServiceOwnerLoading){
			ownerDisplay = <ActivityIndicator size="small"/>
		} else {
			let username = "Default user"
			if (this.props.serviceOwner.username !== undefined){
				username = this.props.serviceOwner.username
			}
			ownerDisplay = <TouchableOpacity onPress={() => {
				this.props.navigation.navigate('userInfo', {id: this.props.serviceOwner.id})}}>
				<Text>by {username}</Text>
			</TouchableOpacity>
		}

		return (
			<View>
				<Text>{this.props.serviceInfo.name}</Text>
				{ownerDisplay}
				<Text>Category: {this.props.serviceInfo.category}</Text>
				<Text>Description:</Text>
				<Text>{this.props.serviceInfo.description}</Text>
                <Star score={this.props.serviceInfo.mark}/>
				<Text>Voted: {this.props.serviceInfo.mark_amount}</Text>
			</View>
		);
	}
}

ServiceInfoScreen.propTypes = {
	isServiceLoading: PropTypes.bool,
	isServiceOwnerLoading: PropTypes.bool,
	serviceInfo: PropTypes.object,
	serviceOwner: PropTypes.object,
	getServiceById: PropTypes.func
}

export default withNavigation(ServiceInfoScreen)