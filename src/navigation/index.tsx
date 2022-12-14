import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Tap1Screen,
  Tap2Screen,
  Tap3Screen,
  PersonScreen,
  PaginationProps,
} from '../index';

export type RootStackParams = {
  Tap1Screen: undefined;
  Tap2Screen: undefined;
  Tap3Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name={PaginationProps.Tap1Screen}
        options={{title: 'Page 1'}}
        component={Tap1Screen}
      />
      <Stack.Screen
        name={PaginationProps.Tap2Screen}
        options={{title: 'Page 2'}}
        component={Tap2Screen}
      />
      <Stack.Screen
        name={PaginationProps.Tap3Screen}
        options={{title: 'Page 3'}}
        component={Tap3Screen}
      />
      <Stack.Screen
        name={PaginationProps.PersonScreen}
        options={{title: 'PersonScreen'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
