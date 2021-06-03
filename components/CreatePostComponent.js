import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Picker } from "react-native";
import { Input } from "react-native-elements";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postContent: " ",
      postType: "General",
    };
  }

  static navigationOptions = {
    title: "Create Post",
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginRight: 10 }}
            source={require("./images/profile-pic-white.jpg")}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Username</Text>
            <Picker
              style={{ width: 150 }}
              mode="dropdown"
              selectedValue={this.state.postType}
              onValueChange={(postType) =>
                this.setState({ postType: postType })
              }
            >
              <Picker.Item label="General" value="General" />
              <Picker.Item label="Question" value="Question" />
              <Picker.Item label="Need Advice" value="needAdvice" />
            </Picker>
          </View>
        </View>
        <View>
          <Input
            style={{ borderBottomColor: "#FFFFFF" }}
            placeholder="What are you thinking?"
            onChangeText={(text) => this.setState({ postContent: text })}
          />
        </View>
      </View>
    );
  }
}

export default CreatePost;
