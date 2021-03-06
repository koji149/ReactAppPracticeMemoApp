import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: ''
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createOn: new Date(),
    })
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    return (
      <View style={ styles.container}>
        <TextInput 
        style={ styles.memoEditInput } 
        multiline 
        value={this.state.body}
        onChangeText={(text) => { this.setState({ body: text }); }}/>
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'/uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  }
});

export default MemoCreateScreen;