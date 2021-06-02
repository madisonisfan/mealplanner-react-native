import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

class Mealplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  static navigationOptions = {
    title: "Your Mealplan",
  };

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          style={{
            backgroundColor: "#D7FFFF",
          }}
        >
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Monday"
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Tuesday"
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Wednesday"
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Thursday"
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Friday"
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Saturday"
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Sunday"
          />
        </ScrollView>

        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={{ fontSize: 20 }}>Monday, January 1, 2021</Text>
        </View>
        <ScrollView>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text style={{ fontSize: 18 }}>Breakfast</Text>
          </View>
          <Card>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{}}
                resizeMethod="auto"
                style={{ width: 150, height: 100, marginRight: 10 }}
                source={require("./images/food1.jpg")}
              />
              <View style={{ flexGrow: 1 }}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 18 }}>Recipe Name</Text>
                  <Text>Recipe Description</Text>
                </View>
                <View style={{ alignSelf: "flex-end", flex: 1 }}>
                  <Icon name="pencil" type="font-awesome" />
                </View>
              </View>
            </View>
          </Card>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text style={{ fontSize: 18 }}>Lunch</Text>
          </View>
          <Card>
            <View style={{ flexDirection: "row" }}>
              <Text>No meals Added. </Text>
              <View style={{ alignSelf: "flex-end", flex: 1 }}>
                <Icon name="pencil" type="font-awesome" />
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Mealplan;
