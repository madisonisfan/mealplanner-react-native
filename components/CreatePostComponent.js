import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Picker } from "react-native";
import { Button, Card, Icon, Input } from "react-native-elements";

import { postPost } from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = {
  postPost: (postContent, postType) => postPost(postContent, postType),
};

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

  submitPost() {
    this.props.postPost(this.state.postContent, this.state.postType);
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Image
            style={{ height: 45, width: 45, marginRight: 10 }}
            source={require("./images/profile-pic-white.jpg")}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Username</Text>
            <View
              style={{ borderColor: "#000", borderWidth: 0.5, marginTop: 5 }}
            >
              <Picker
                style={{
                  width: 150,
                  borderColor: "#000",
                  borderWidth: 5,
                  height: 25,
                }}
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
          <View style={{ position: "absolute", right: 0 }}>
            <Button
              title="Post"
              buttonStyle={{ backgroundColor: "#000", height: 35 }}
              onPress={() => {
                this.submitPost();
                this.props.navigation.navigate("Blog");
              }}
            />
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

export default connect(null, mapDispatchToProps)(CreatePost);
