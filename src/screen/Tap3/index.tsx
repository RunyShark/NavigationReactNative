import React from 'react';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {Button, Text, View} from 'react-native';
import {PaginationProps, RootStackParams, styles} from '../../index';
interface PropsNavigation
  extends StackScreenProps<RootStackParams, PaginationProps.Tap3Screen> {}

export const Tap3Screen = ({navigation}: PropsNavigation) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen3</Text>
      <Button title="To return" onPress={() => navigation.pop()} />
      <Button title="Next Screen" onPress={() => navigation.popToTop()} />
    </View>
  );
};
