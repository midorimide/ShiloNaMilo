import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import { Text, Card, Rating, ListItem } from 'react-native-elements'
import ServiceList from '../../components/service-list'
import { withNavigation } from 'react-navigation';

class UserInfoScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getUserById(this.props.navigation.getParam('id', 0))
	}

	validateRating(user){
		if (user.rating < 0){
			user.rating = 0
		}
		if (user.rating > 5){
			user.rating = 5
		}
	}

	createUserScreen(user){
		return(
			<ScrollView>
				<ListItem
					leftAvatar={{size: 'large', rounded: true, source: {uri: user.profilePicturePath}}}
					title={this.createUserTitle(user)}
					subtitle={this.createUserSubtitle(user)}
				/>
				<Card title='Info'>
					<Text h5>
						Location: {user.location}
					</Text>
					<Text h5>
						Email: {user.emailAddress}
					</Text>
					<Text h5>
						Wallet: {user.wallet}
					</Text>
				</Card>
				<Card title='About me'>
					<Text h5>
						{user.description}
					</Text>
				</Card>
				<Card title='My services'>
					{this.createUserServicesComponent(this.props.userServicesInfo, this.props.areUserServicesLoading)}
				</Card>
			</ScrollView>
		)
	}

	createUserTitle(user){
		return(
			<View style={{flexDirection: 'row', justifyContent: 'center'}}>
				<Text h4>
					{user.fullName}
				</Text>
				<Text h5 style={{marginLeft: 10, marginTop: 9}}>
					({user.username})
				</Text>
			</View>
		)
	}

	createUserSubtitle(user){
		return(
			<View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
				<Rating readonly fractions={2} startingValue={user.rating} imageSize={20}/>
				<Text h5 style={{marginLeft: 5}}>
					(voted: {this.getVotesCount(this.props.userServicesInfo)})
				</Text>
			</View>
		)
	}

	createUserServicesComponent(services, areUserServicesLoading){
		if (areUserServicesLoading){
			return <ActivityIndicator size="large"/>
		} else {
			return <ServiceList services={services}/>
		}
	}

	getVotesCount(services){
		let count = 0
		services.forEach((service) => {
			count += service.mark_amount
		})
		return count
	}

	render() {
		if (this.props.isUserLoading){
			return <ActivityIndicator size="large"/>
		}
        this.validateRating(this.props.userInfo)
		return this.createUserScreen(this.props.userInfo)
	}
}

UserInfoScreen.propTypes = {
	isUserLoading: PropTypes.bool,
    areUserServicesLoading: PropTypes.bool,
    userInfo: PropTypes.object,
    userServicesInfo: PropTypes.array,
	getUserById: PropTypes.func
}

export default withNavigation(UserInfoScreen)