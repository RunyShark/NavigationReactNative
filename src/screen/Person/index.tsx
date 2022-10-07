/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams, PaginationProps} from '../../index';
interface PropsNavigation
  extends StackScreenProps<RootStackParams, PaginationProps.PersonScreen> {}

export const PersonScreen = ({route, navigation}: PropsNavigation) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  return (
    <View>
      <Text>Person {route.params?.name}</Text>
    </View>
  );
};
