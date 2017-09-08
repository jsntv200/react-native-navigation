import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default ({ navigation }) =>
  <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ActivityIndicator />
  </View>;
