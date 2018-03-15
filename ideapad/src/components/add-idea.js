import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createIdea, ideaInputChange } from '../actions';
import IdeaPad from './idea-pad';
import InnerSection from './inner-section';
import { Button } from 'react-native-elements';

class AddIdea extends Component {
  componentDidMount() {
    this.props.ideaInputChange({ key: 'title', value: '' });
    this.props.ideaInputChange({ key: 'idea', value: '' });    
  }

  create() {
    const { title, idea } = this.props;
    if (title && idea) {
      this.props.createIdea({ title, idea }); 
      this.props.navigation.navigate('Ideas');
    }
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <IdeaPad {...this.props} />
        <InnerSection>
          <Button 
            title="Submit" 
            onPress={this.create.bind(this)} 
            backgroundColor={'#3BD3D4'}
          />
        </InnerSection>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.ideaPad.title,
    idea: state.ideaPad.idea
  };
}

export default connect(mapStateToProps, { createIdea, ideaInputChange })(AddIdea);
