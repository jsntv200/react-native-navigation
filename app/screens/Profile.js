import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Splash from './Splash';

import { me } from '../config/data';

const Profile = ({ member, navigation, onLogout }) => {
  const { dob, email, location, login, name, phone, picture } = me;
  const { id, avatarUrl } = member;

  if (id) {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: `https://dev-api.12wbt.com/${avatarUrl.original}` }}
          featured
          title={`${name.first} ${name.last}`.toUpperCase()}
          caption={email}
        />
        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button title="Logout" onPress={onLogout} />
          <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
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
  } else {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }
};

export default withNavigation(Profile);
