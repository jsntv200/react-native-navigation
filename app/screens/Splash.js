import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default () =>
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ActivityIndicator />
  </View>;
