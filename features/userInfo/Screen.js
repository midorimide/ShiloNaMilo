import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import Star from 'react-native-star-view'
import ServiceList from '../../components/ServiceList'

export default class UserInfoScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getUserById(this.props.navigation.getParam('id', 0))
	}

	render() {
		if (this.props.isUserLoading){
			return(
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large"/>
				</View>
			)
		}
		console.log(this.props.userInfo)
        if (this.props.userInfo.rating < 0){
			this.props.userInfo.rating = 0
		}
		if (this.props.userInfo.rating > 5){
			this.props.userInfo.rating = 5
		}

		let userServicesDisplay = Component
		if (this.props.areUserServicesLoading){
			userServicesDisplay = <ActivityIndicator size="large"/>
		} else {
			userServicesDisplay = <ServiceList services={this.props.userServicesInfo}/>
		}

		return (
			<View>
				<Text>{this.props.userInfo.fullName}</Text>
				<Text>{this.props.userInfo.username}</Text>
				<Text>{this.props.userInfo.emailAddress}</Text>
				<Text>{this.props.userInfo.location}</Text>
                <Star score={this.props.userInfo.rating}/>
				<Text>About me:</Text>
				<Text>{this.props.userInfo.description}</Text>
                <Image source={this.props.userInfo.profilePicturePath}/>
				<Text>Services:</Text>
				{userServicesDisplay}
			</View>
		);
	}
}

UserInfoScreen.propTypes = {
	isUserLoading: PropTypes.bool,
    areUserServicesLoading: PropTypes.bool,
    userInfo: PropTypes.object,
    userServicesInfo: PropTypes.array,
	getUserById: PropTypes.func
}