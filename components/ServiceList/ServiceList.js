import React, { Component } from 'react'
import { FlatList} from 'react-native'
import PropTypes from 'prop-types'
import ServiceListItem from './ServiceListItem'

class ServiceList extends Component {
	render() {
		return (
			<FlatList
				data={this.props.services}
				keyExtractor={(item,index) => item.id.toString()}
				renderItem={({item}) => <ServiceListItem serviceInfo={item}/>}/>
		);
	}
}

ServiceList.propTypes = {
	services: PropTypes.array
}

export default ServiceList