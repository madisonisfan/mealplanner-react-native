import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Blog",
  };
  render() {
    const renderBlogPost = ({ item }) => {
      return (
        <View
          style={{
            padding: 10,
            backgroundColor: "#FFFFFF",
            height: 150,
            marginTop: 5,
            borderBottomColor: "#C9CCCC",
            borderBottomWidth: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ height: 50, width: 50, marginRight: 10 }}
              source={require("./images/profile-pic-white.jpg")}
            />
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {item.username}
              </Text>
              <Text style={{ fontSize: 12 }}>{item.date}</Text>
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
        <View
          style={{
            height: 75,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            padding: 10,
            borderBottomColor: "#C9CCCC",
            borderBottomWidth: 5,
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
        <View>
          <FlatList
            data={this.props.blogs.blogs}
            renderItem={renderBlogPost}
            keyExtractor={(item) => item.id.toString()}
          />
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

export default connect(mapStateToProps)(Blog);
//export default Blog;

/*
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
        </View> */
