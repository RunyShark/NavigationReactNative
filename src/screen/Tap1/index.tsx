import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../index';
import {RootStackParams, PaginationProps} from '../../index';
interface PropsNavigation
  extends StackScreenProps<RootStackParams, PaginationProps.Tap1Screen> {}

export const Tap1Screen = ({navigation}: PropsNavigation) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen1</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('Tap1Screen')}
      />
      <Text>Navigate with arguments</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            name: 'pedro',
          })
        }>
        <Text>Person Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
