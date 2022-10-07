import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles, PropsNavigation, ScreenNavigation} from '../../index';

export const Tap1Screen = ({navigation}: PropsNavigation) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen1</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate(ScreenNavigation[1])}
      />
      <Button
        title="Person Screen"
        onPress={() => navigation.navigate(ScreenNavigation[3])}
      />
    </View>
  );
};
