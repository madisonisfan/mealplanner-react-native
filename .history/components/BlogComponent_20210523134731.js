import React, { Component } from "react";
import { View, Text } from "react-native";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Blog",
  };
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, marginTop: 50 }}>Blog</Text>
      </View>
    );
  }
}

export default Blog;
