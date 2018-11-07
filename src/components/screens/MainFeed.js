import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";
import { PostFeed } from "../container";

class InstaClone extends Component {

  /**
   *   constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  componentDidMount() {}
   * 
   */

  render() {
    /**
     *     const imageHeight = Math.floor(this.state.screenWidth * 1.1);

    const imageUri =
      "https://lh3.googleusercontent.com/5e6d1NfrcTqwgFOdR9xiftnN56Nv22l1VxXWU6ba15546ZazuYp6hSCEDpbEjXpN_Zp4GwOuOKY5Uw_klyoQ5QqumUI" +
      "=s" +
      imageHeight +
      "-c";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

     * 
     */

    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text> Instagram</Text>
        </View>

        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 75,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default InstaClone;
