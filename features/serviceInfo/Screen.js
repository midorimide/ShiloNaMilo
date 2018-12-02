import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import { Text, Rating, ListItem, Card } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import TouchableScale from 'react-native-touchable-scale'

class ServiceInfoScreen extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getServiceById(this.props.navigation.getParam('id', 0))
	}

	validateMark(service){
		if (service.mark < 0){
			service.mark = 0
		}
		if (service.mark > 5){
			service.mark = 5
		}
	}

	createServiceOwnerComponent(owner){
		if (this.props.isServiceOwnerLoading){
			return <ActivityIndicator size="large"/>
		} else {
			return(
				<ListItem
					onPress={() => {
						this.props.navigation.push('userInfo', {id: owner.id})
					}}
					component={TouchableScale}
					friction={90}
					tension={100}
					activeScale={0.95}

					leftAvatar={{rounded: true, source: {uri: owner.profilePicturePath}}}
					title={owner.username}

					chevron
				/>
			)
		}
	}

	createServiceScreen(service){
		return(
			<ScrollView>
				<View style={{flexDirection: 'column', justifyContent:'flex-start', alignContent:'center'}}>
					<Text h4>
						{service.name}
					</Text>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
						<Rating readonly fractions={2} startingValue={service.mark} imageSize={20}/>
						<Text h5 style={{marginLeft: 5}}>
							(voted: {service.mark_amount})
						</Text>
					</View>
					<Text h5>
						Category: {service.category}
					</Text>
				</View>
				<Card title='Owner'>
					{this.createServiceOwnerComponent(this.props.serviceOwner)}
				</Card>
				<Card title='Description'>
					<Text h5>
						{service.description}
					</Text>
				</Card>
			</ScrollView>
		)
	}

	render(){
		if (this.props.isServiceLoading){
			return <ActivityIndicator size="large"/>
		}
		this.validateMark(this.props.serviceInfo)
		return this.createServiceScreen(this.props.serviceInfo)
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