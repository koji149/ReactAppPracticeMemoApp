import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Platform} from 'react-native';
import firebase from 'firebase';

require("firebase/firestore");

import ENV from './env.json';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';






const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Login:      {screen: LoginScreen},
  Signup:     {screen: SignupScreen},
  Home:       { screen: MemoListScreen},
  MemoDetail: { screen: MemoDetailScreen},
  MemoEdit:   { screen: MemoEditScreen},
  MemoCreate: {screen: MemoCreateScreen},
}, {
  defaultNavigationOptions: 
    { headerTitle: 'Memot',
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#000',
        ...Platform.select({
          android: {
            height: 80,
            paddingTop: 20,
          },
        }),
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
});



export default createAppContainer(App);
