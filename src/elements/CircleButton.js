import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { useFonts } from '@use-expo/font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf'

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const { style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return(
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.CircleButtonTittle, { color: textColor }]}>
              {'this.props.children'}
            </Text>
          ) : null
        }
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
  },
  CircleButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CircleButtonTittle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 32,
  },
})

export default CircleButton;