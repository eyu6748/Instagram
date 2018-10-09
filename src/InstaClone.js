import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text> Instagram</Text>
        </View>

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

        <Image
          style={{ width: 100 + "%", height: 100 }}
          source={{
            uri:
              "https://lh3.googleusercontent.com/5e6d1NfrcTqwgFOdR9xiftnN56Nv22l1VxXWU6ba15546ZazuYp6hSCEDpbEjXpN_Zp4GwOuOKY5Uw_klyoQ5QqumUI=s1024"
          }}
        />
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
    height: 50,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default InstaClone;
