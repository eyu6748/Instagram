import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

import * as firebase from "firebase";
//ok wait just use firebase.auth for authentication

class Register extends Component {
  constructor() {
    super();
    this.state = {
      credientials: {
        email: "",
        userName: "",
        password: ""
      }
    };
  }

  login() {
    //https://reactnavigation.org/docs/en/params.html
    //check how to pass parameters to naviagation, cuz normally, you would pass data to the component tag from your parent
    this.props.navigation.navigate("main");
  }

  register() {
    //No SQL sucks, it's stupid, no sequential id, only just some hashed unique id
    //alert(JSON.stringify(this.state.credientials));
    var json = JSON.stringify(this.state.credientials);
    obj = JSON.parse(json);
    this.writeUserData(obj);
  }

  writeUserData(obj) {
    //this should redirect to a different scrreen, when successfully account created 
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = obj.email;
    var userName = obj.userName;
    var password = obj.password;

    console.log(reg.test(email) === false);

    if (userName.length < 4) {
      alert("username is too short");
      return;
    }
    if (email.length < 4) {
      alert("Email is too short");
      return;
    }
    if (reg.test(email) === false) {
      alert("Email is not valid");
      return;
    }
    if (password.length < 4) {
      alert("Password is too short.");
      return;
    }

    firebase
      .database()
      .ref("accounts/")
      .push({
        username: userName,
        email: email,
        password: password
      });
  }

  componentDidMount() {}

  updateText(text, field) {
    let newCredientials = Object.assign(this.state.credientials);
    //object.assign vs object.create, assign copies the the type of object
    newCredientials[field] = text;
    this.setState({
      credentials: newCredientials
    });
    console.log(text);
  }
  render() {
    return (
      <View
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightpink"
        }}
      >
        <Text>Register PAGE</Text>
        <TextInput
          value={this.state.email}
          autoCorrect={false}
          placeholder="Email"
          style={styles.input}
          onChangeText={text => this.updateText(text, "email")}
        />
        <TextInput
          value={this.state.userName}
          autoCorrect={false}
          placeholder="UserName"
          style={styles.input}
          onChangeText={text => this.updateText(text, "userName")}
        />
        <TextInput
          value={this.state.password}
          secureTextEntry
          placeholder="Password"
          style={styles.input}
          onChangeText={text => this.updateText(text, "password")}
        />
        <Button
          onPress={() => {
            this.register();
          }}
          title="Signup"
        />

        <Button
          onPress={() => {
            this.props.getData;
          }}
          title="Testing"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 75 + "%",
    marginHorizontal: 50,
    backgroundColor: "white",
    marginBottom: 20
  }
});

export default Register;
