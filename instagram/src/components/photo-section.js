import React, {Component} from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class PhotoSection extends Component {
  constructor() {
    super()
    this.like = false;
    this.state = { heartIcon: 'ios-heart-outline' };
  }

  handleOnPress = () => {
    this.like = !this.like;
    this.like ? this.setState({ heartIcon: 'ios-heart' }) : this.setState({ heartIcon: 'ios-heart-outline' });
  }

  render() {
    const { user_avatar, caption, username, image } = this.props.photo;

    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={{uri: user_avatar}} />
          <View style={styles.titleContainer}>
            <Text style={styles.userName}>{username}</Text>
          </View>
        </View>

        <View>
          <Image source={{uri: image}} style={styles.photo} resizeMode="contain" />
        </View>

        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback onPress={this.handleOnPress.bind(this)}>
            <Ionicons
              name={this.state.heartIcon}
              size={30}
              style={{ color: this.state.heartIcon === 'ios-heart' ? 'red' : 'black' }}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.imageMeta}>
          <Text> <Text style={styles.userName}>{username}</Text> {caption}</Text>
        </View>
      </View>
    );
  }
};


const styles = {
  titleContainer: {
    justifyContent: 'space-around'
  },

  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10
  },

  thumbnailSection: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd'
	},

  imageMeta: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row'
  },

  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  photo: {
    width: null,
    flex: 1,
    alignItems: 'center',
    height: 300
  },

  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5
  },

  heartContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5
  }
};

export default PhotoSection;
