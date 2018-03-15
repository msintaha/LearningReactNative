import React, { Component } from "react";
import { Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: "flex-start",
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15
  }
};

export default Header;
