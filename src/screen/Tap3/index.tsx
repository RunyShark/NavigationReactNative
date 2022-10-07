import React from 'react';

import {Button, Text, View} from 'react-native';
import {PropsNavigation, styles} from '../../index';

export const Tap3Screen = ({navigation}: PropsNavigation) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Screen3</Text>
      <Button title="To return" onPress={() => navigation.pop()} />
      <Button title="Next Screen" onPress={() => navigation.popToTop()} />
    </View>
  );
};
