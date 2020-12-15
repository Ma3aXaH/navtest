
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const FirstScreen = ({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>First screen</Text>
    </View>
  )
}

const SecondScreen = ({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()

const App = () => {

  const deeplink = {
    prefixes: ['myapp://'],
    config: {
      initialRouteName: 'FirstScreen',
      screens: {
        FirstScreen: 'fs',
        SecondScreen: 'ss'
      }
    }
  }

  return (
    <NavigationContainer linking={deeplink}>
      <Stack.Navigator>
        <Stack.Screen name='FirstScreen' component={FirstScreen}/>
        <Stack.Screen name='SecondScreen' component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
