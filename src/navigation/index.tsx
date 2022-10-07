import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {Tap1Screen, Tap2Screen, Tap3Screen} from '../index';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tap1Screen" component={Tap1Screen} />
      <Stack.Screen name="Tap2Screen" component={Tap2Screen} />
      <Stack.Screen name="Tap3Screen" component={Tap3Screen} />
    </Stack.Navigator>
  );
};
