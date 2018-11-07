import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import {
  MainFeed,
  Login,
  Camera,
  Profile,
  Register
} from "./components/screens";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import * as firebase from "firebase";

//https://reactnavigation.org/docs/en/params.html
//pass data from navigation

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile,
  tempRegister: Register
});

const IntroStack = createStackNavigator({
  register: Register,
  login: Login
});

const MainStack = createSwitchNavigator({
  
  main: Tabs,
  intro: IntroStack
});

const dbConfig = {
  // Initialize Firebase
  apiKey: "AIzaSyDwhkAj4WcRPEbqztsvBg9rGyZrIe5Ir5U",
  authDomain: "instagram-ad093.firebaseapp.com",
  databaseURL: "https://instagram-ad093.firebaseio.com",
  projectId: "instagram-ad093",
  storageBucket: "instagram-ad093.appspot.com",
  messagingSenderId: "655336180614"
};

//this is important tbh, i didn't read the entire document for this shit, but it initializes firebase for this app
//using the dbConfig, which stores the config settings for your firebase database
//smh took me 2 weeks plus of loafing to figure this out.
//ONLY NEEDS TO BE CALLED in APP.JS OR YOUR EQUIVILENT. 
//FIREBASE FUNCTIONS CORRESPOND TO THE WEB API VERSION
//NOT THE ANDROID VERSION, AS THATS WITH JAVA
firebase.initializeApp(dbConfig);

class InstaClone extends Component {
  render() {
    return <MainStack />;
  }

  /** 
   * Ignore, this if you wanna write and read
   * //you just use the appropriate functions nested in a function call in the appropriate file
   * https://www.youtube.com/watch?v=Di607bTqhPc
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("accounts")
      .once("value", snapshot => {
        const data = snapshot.val();
        if (snapshot.val()) {
          const initAccounts = [];
          Object.keys(data).forEach(
            (account = initAccounts.push(data[account]))
          );
          this.setState({
            accounts: initAccounts
          })
        }
      });

  
    }*/
}

export default InstaClone;
