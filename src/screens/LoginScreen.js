import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { StackActions } from 'react-navigation';
class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          StackActions.navigate({rootName: 'Home' }),
        ],
      })
      this.props.navigation.dispatch(resetAction);
    })
    .catch(() => {
    });
  }

  handlePless() {
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <View style={ styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input} 
          value={this.state.email} 
          onChangeText={(text) => { this.setState({email: text});}} 
          autoCapitalize="none" autoCorrect={false} 
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput 
          style={styles.input} 
          value={this.state.password} 
          onChangeText={(text) => {this.setState({password: text});}} 
          autoCapitalize="none" 
          autoCorrect={false} 
          placeholder="Password" 
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.button}  onPress={this.handleSubmit.bind(this)} underlayColor='#C70F66' >
          <Text style={styles.buttonTitle}>送信</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.signup} onPress={this.handlePless.bind(this)}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff'
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 8,
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  }
});

export default LoginScreen;