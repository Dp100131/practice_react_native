import React from 'react';
import Constants from 'expo-constants';
import { Text, View, TouchableNativeFeedback, Alert } from "react-native";
import {RepositoryList} from '../RepositoriesList/index.jsx';

export function Main() {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1, paddingLeft:20, paddingTop:20}}>
        <Text>Rate Repository Application</Text>
        <RepositoryList/>
    </View>
  )
}