import React from 'react';
import {Button, Text, View} from 'react-native';
import {PropsNavigation, styles} from '../../index';

export const Tap2Screen = ({navigation}: PropsNavigation) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Screen2</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('Tap3Screen')}
      />
    </View>
  );
};
