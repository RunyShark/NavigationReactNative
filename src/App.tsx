import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigation} from './index';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
