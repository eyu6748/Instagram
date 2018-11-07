import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";

class Login extends Component {
  state = {};

  login() {
    this.props.navigation.navigate("register");
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => {
          this.login();
        }}
      >
        <Text>New User</Text>
      </TouchableOpacity>
    );
  }
}

export default Login;
