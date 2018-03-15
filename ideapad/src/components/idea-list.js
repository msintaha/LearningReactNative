import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getIdeas } from '../actions';
import { List, ListItem } from 'react-native-elements';
import _ from 'lodash';

class IdeaList extends Component {
  componentDidMount() {
    this.props.getIdeas();
  }

  renderList() {
    return this.props.ideas.map((idea) => (
      <ListItem
        key={idea.id}
        title={idea.title}
        onPress={() => this.props.navigation.navigate('EditIdea', { idea })}
        leftIcon={{name: 'lightbulb-outline'}}
      />
    ));
  }

  render() {
    if (!this.props.ideas) {
      return (
        <Text> Loading ... </Text>
      );
    }
    return (
      <List containerStyle={{marginTop: 0}}>
        {this.renderList()}
      </List>
    );
  }
}

function mapStateToProps(state) {
  const ideas = _.map(state.ideas, (val, id) => {
    val['id'] = id;
    return val;
  });

  return { ideas };
}

export default connect(mapStateToProps, { getIdeas })(IdeaList);
