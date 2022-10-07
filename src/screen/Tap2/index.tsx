/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {PaginationProps, RootStackParams, styles} from '../../index';
interface PropsNavigation
  extends StackScreenProps<RootStackParams, PaginationProps.Tap2Screen> {}

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
        onPress={() => navigation.navigate(PaginationProps.Tap3Screen)}
      />
    </View>
  );
};
