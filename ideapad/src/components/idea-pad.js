import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import InnerSection from './inner-section';
import { connect } from 'react-redux';
import { ideaInputChange, createIdea } from '../actions';

class IdeaPad extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <InnerSection>
          <FormLabel>Idea Title</FormLabel>
          <FormInput
            placeholder="Idea Title"
            value={this.props.title} 
            onChangeText={text => this.props.ideaInputChange({ key: 'title', value: text})}
          />
        </InnerSection>
        <InnerSection>
          <FormLabel>Your Idea</FormLabel>
          <FormInput
            placeholder="Jot down your idea here..."
            value={this.props.idea} 
            onChangeText={text => this.props.ideaInputChange({ key: 'idea', value: text})}
            multiline={true}
            inputStyle={{height: 200}}
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
export default connect(mapStateToProps, { ideaInputChange, createIdea })(IdeaPad);
