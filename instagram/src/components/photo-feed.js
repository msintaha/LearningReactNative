import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PhotoSection from './photo-section';
import { getPhotos } from '../actions';

class PhotoFeed extends Component {
	componentWillMount() {
		this.props.getPhotos();
	}

  renderFeed() {
  	return this.props.photos.map(photo => {
  		return (
  			<PhotoSection key={photo.id} photo={photo} />
  		);
  	});
  }

	render() {
		return <ScrollView>{this.renderFeed()}</ScrollView>
	}
};

const mapStateToProps = (state) => {
	return { photos: state.photos };
};

export default connect(mapStateToProps, { getPhotos })(PhotoFeed);
