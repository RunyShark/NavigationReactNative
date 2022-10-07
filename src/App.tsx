import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tap1Screen, Tap2Screen, Tap3Screen} from './index';

export const App = () => {
  return (
    <NavigationContainer>
      <Tap3Screen />
    </NavigationContainer>
  );
};
