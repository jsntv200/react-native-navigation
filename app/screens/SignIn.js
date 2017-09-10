import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

export default ({ email, password, onSubmit }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN IN">
      <FormLabel>Email</FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={value => (email = value)}
        placeholder="Email address..."
      />
      <FormLabel>Password</FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={value => (password = value)}
        placeholder="Password..."
        secureTextEntry
      />
      <Button
        backgroundColor="#03A9F4"
        buttonStyle={{ marginTop: 20 }}
        onPress={() => onSubmit(email, password)}
        title="SIGN IN"
      />
    </Card>
  </View>
);
