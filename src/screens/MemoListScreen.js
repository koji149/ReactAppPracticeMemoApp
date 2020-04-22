import React from 'react';
import {  StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton'

class MemoListScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <MemoList/>
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
})

export default MemoListScreen;