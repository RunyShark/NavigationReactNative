/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {PropsNavigation, ScreenNavigation, styles} from '../../index';

export const Tap2Screen = ({navigation}: PropsNavigation) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hello word',
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen2</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate(ScreenNavigation[2])}
      />
    </View>
  );
};
