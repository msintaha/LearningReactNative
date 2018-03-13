import React, {Component} from 'react';
import { View, Text, Image, Button } from 'react-native';


class PhotoSection extends Component {
  constructor() {
    super()
    this.state = { like: false, likeText: 'Like' };
  }

  handleOnPress = () => {
    const newLikeState = !this.state.like;

    this.setState({
      like: newLikeState
    });

    newLikeState ? this.setState({ likeText: 'Liked' }) : this.setState({ likeText: 'Like' })
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

        <View style={styles.imageMeta}>
          <Text> <Text style={styles.userName}>{username}</Text> {caption}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title={this.state.likeText} onPress={this.handleOnPress.bind(this)} />
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

  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 5
  }
};

export default PhotoSection;
