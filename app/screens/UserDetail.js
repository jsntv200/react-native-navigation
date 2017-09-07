import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

export default ({ navigation }) => {
  const {
    picture,
    name,
    email,
    phone,
    login,
    dob,
    location,
  } = navigation.state.params;

  return (
    <ScrollView>
      <Tile
        caption={email}
        featured
        imageSrc={{ uri: picture.large }}
        title={`${name.first} ${name.last}`.toUpperCase()}
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
