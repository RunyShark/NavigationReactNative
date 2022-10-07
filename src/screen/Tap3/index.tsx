import React from 'react';

import {Button, Text, View} from 'react-native';
import {PropsNavigation, ScreenNavigation} from '../../index';

export const Tap3Screen = ({navigation}: PropsNavigation) => {
  return (
    <View>
      <Text>Screen3</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate(ScreenNavigation[0])}
      />
    </View>
  );
};
