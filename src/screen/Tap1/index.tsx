import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles, PropsNavigation} from '../../index';

export const Tap1Screen = ({navigation}: PropsNavigation) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Screen1</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('Tap2Screen')}
      />
    </View>
  );
};
