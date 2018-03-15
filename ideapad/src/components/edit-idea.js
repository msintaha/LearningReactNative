import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { connect } from 'react-redux';
import { editIdea, ideaInputChange, deleteIdea } from '../actions';
import IdeaPad from './idea-pad';
import InnerSection from './inner-section';
import { Button } from 'react-native-elements';
import _ from 'lodash';

class EditIdea extends Component {
  componentDidMount() {
    const { params } = this.props.navigation.state;
    _.each(params.idea, (value, key) => {
      this.props.ideaInputChange({ key, value });
    });
  }

  update() {
    const { id } = this.props.navigation.state.params.idea;
    const { title, idea } = this.props;
    if (title && idea) {
      this.props.editIdea({ title, idea, id });  
      this.props.navigation.navigate('Ideas');          
    }
  }

  delete() {
    const { id } = this.props.navigation.state.params.idea;
    
    this.props.deleteIdea({ id }); 
    this.props.navigation.navigate('Ideas');                   
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <IdeaPad {...this.props} />
        <InnerSection>
          <Button 
            title="Save" 
            onPress={this.update.bind(this)} 
            backgroundColor={'#3BD3D4'}
          />
        </InnerSection>
        <InnerSection>
          <Button 
            title="Delete" 
            onPress={this.delete.bind(this)} 
            backgroundColor={'#ef2b35'}
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

export default connect(mapStateToProps, { editIdea, ideaInputChange, deleteIdea })(EditIdea);
