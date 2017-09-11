import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';

export default ({ navigation }) => {
  const { imageUrl, name } = navigation.state.params;

  return (
    <ScrollView>
      <Tile
        featured
        imageSrc={{ uri: `https://dev-api.12wbt.com/${imageUrl.large}` }}
        title={`${name}`.toUpperCase()}
      />
      <View style={{ flexDirection: 'row', height: 80 }}>
        <View style={{ backgroundColor: 'blue', flex: 0.25 }} />
        <View style={{ backgroundColor: 'red', flex: 0.25 }} />
        <View style={{ backgroundColor: 'green', flex: 0.25 }} />
        <View style={{ backgroundColor: 'pink', flex: 0.25 }} />
      </View>
    </ScrollView>
  );
};

/*
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
*/
