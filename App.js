/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';

import Api from './Api';

export default class App extends Component<{}> {

  state = {
    users: []
  };

  async componentWillMount() {
    let users = await Api.getUsers();
    this.setState({users: users})
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to List</Text>
      {this.state.users.map(user=>(
          <View key={user.id} style={styles.listItem}>
            <Image source={{uri: user.avatar_url}} style={styles.avatar} />
            <Text style={styles.title}>{user.login}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc'
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    fontWeight: '700'
  },
  avatar: {
    width: "100%",
    height: 200
  }
});
