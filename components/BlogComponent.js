import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

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
        <View
          style={{
            height: 75,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Image
            style={{ height: 50, width: 50, marginRight: 10 }}
            source={require("./images/profile-pic-white.jpg")}
          />
          <View style={{ flexGrow: 1 }}>
            <Button
              type="outline"
              buttonStyle={{ width: "100%" }}
              title={
                <Text style={{ color: "#000000" }}>Today I'm thinking..</Text>
              }
              onPress={() => this.props.navigation.navigate("CreatePost")}
            />
          </View>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "#FFFFFF",
            height: 150,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ height: 50, width: 50, marginRight: 10 }}
              source={require("./images/profile-pic-white.jpg")}
            />
            <Text style={{ fontWeight: "bold" }}>Username</Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text>Post content goes here</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <Button
              type="clear"
              titleStyle={{ color: "#000000" }}
              title="Like"
            />
            <Button
              type="clear"
              titleStyle={{ color: "#000000" }}
              title="Comment"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#B8FAFE",
    height: 75,
  },
});

export default Blog;
