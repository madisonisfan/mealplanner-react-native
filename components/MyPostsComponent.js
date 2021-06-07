import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

import { connect } from "react-redux";
import { Button, Card, Icon } from "react-native-elements";

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const renderBlogPost = ({ item }) => {
      return (
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
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
              <Text>{item.date}</Text>
            </View>
            <View style={{ position: "absolute", right: 0 }}>
              <Text>{item.postType}</Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text>{item.postContent}</Text>
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
      );
    };

    return (
      <View>
        <FlatList
          data={this.props.blogs.blogs.filter(
            (blog) => blog.username === "Tester username"
          )}
          renderItem={renderBlogPost}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(MyPosts);
