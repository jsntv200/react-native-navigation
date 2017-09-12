import React from 'react';
import { ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

export default ({ navigation }) =>
  <ScrollView style={{ marginTop: -20 }}>
    <List>
      <ListItem title="Notifications" />
      <ListItem title="Profile" />
      <ListItem title="Password" />
    </List>
    <List>
      <ListItem title="Sign Out" rightIcon={{ name: 'cancel' }} />
    </List>
    <Button
      title="Close"
      buttonStyle={{ marginTop: 20 }}
      onPress={() => navigation.goBack(null)}
    />
  </ScrollView>;
