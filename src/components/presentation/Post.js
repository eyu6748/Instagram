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

class Post extends Component {
  constructor() {
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

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);

    const imageSelection =
      this.props.item % 2 === 0
        ? "https://lh3.googleusercontent.com/RsydXJIFA-aq61M11BGyQzygejkt8TrRPiaVqEKCR96r4ndO-q6_8TWfom9-wvAddaJoxAQvBMIh8Ai6nheORBFh4g"
        : "https://lh3.googleusercontent.com/5e6d1NfrcTqwgFOdR9xiftnN56Nv22l1VxXWU6ba15546ZazuYp6hSCEDpbEjXpN_Zp4GwOuOKY5Uw_klyoQ5QqumUI";

    const imageUri = imageSelection + "=s" + imageHeight + "-c";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

    return (
      <View style={{ flex: 1, width: 100 + "%" }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/x9ebG2U1mmRBYOq50IBTIecbZhw00PHI39kiqKsRHvYE9TP5nQzZpMQOvkbcKkAwgik-USk38MyhbZ4F89hXlLhH=s1024"
              }}
            />
            <Text style={{ marginLeft: 10 }}> Jimmy Bobby</Text>
          </View>

          <View>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.likeToggled()}
          activeOpacity={0.6}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 250 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <Image
            style={[
              styles.icon,
              { height: 35, width: 35, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />
          <Image
            style={[styles.icon, { height: 30, width: 30 }]}
            source={config.images.chatIcon}
          />
          <Image
            resizeMode="stretch"
            style={[styles.icon, { height: 50, width: 40 }]}
            source={config.images.arrowIcon}
          />
        </View>
        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { height: 25, width: 25 }]}
            source={config.images.heartIcon}
          />
          <Text>100 Likes</Text>
        </View>
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
  },

  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    flexDirection: "row",
    width: 100 + "%",
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: config.styleConstants.rowHeight,
    borderColor: "rgb(233,233,233)",
    borderBottomColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center"
  },

  icon: {
    marginLeft: 5
  }
});

export default Post;
