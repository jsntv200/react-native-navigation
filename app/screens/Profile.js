import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

export default ({ navigation }) => {
  const { dob, email, location, login, name, phone, picture } = me;
  return (
    <ScrollView>
      <Tile
        imageSrc={{ uri: picture.large }}
        featured
        title={`${name.first} ${name.last}`.toUpperCase()}
        caption={email}
      />
      <Button
        title="Settings"
        buttonStyle={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Settings')}
      />
      <List>
        <ListItem title="Email" rightTitle={email} hideChevron />
        <ListItem title="Phone" rightTitle={phone} hideChevron />
      </List>
      <List>
        <ListItem title="Username" rightTitle={login.username} hideChevron />
      </List>
      <List>
        <ListItem title="Birthday" rightTitle={dob} hideChevron />
        <ListItem title="City" rightTitle={location.city} hideChevron />
      </List>
    </ScrollView>
  );
};
