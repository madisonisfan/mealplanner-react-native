import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Your Profile Page",
  };
  render() {
    return (
      <View>
        <View style={{ alignSelf: "center" }}>
          <Image
            style={{ height: 100, width: 100, marginTop: 15 }}
            source={require("./images/profile-pic-white.jpg")}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Username</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            type="outline"
            raised
            titleStyle={{ color: "#000000" }}
            title="My Posts"
          />
          <Button
            type="outline"
            raised
            titleStyle={{ color: "#000000" }}
            title="My Recipes"
          />
        </View>
        <View
          style={{ backgroundColor: "#FFFFFF", marginTop: 20, height: 250 }}
        >
          <View
            style={{
              backgroundColor: "#858585",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
            >
              My Goal: users goal here
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>User's progress, sensitivities, preferences</Text>
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

export default ProfilePage;
