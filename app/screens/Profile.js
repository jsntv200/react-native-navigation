import React from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Splash from './Splash';

const Profile = ({ member, navigation, onLogout }) => {
  const { avatarUrl, country, email, firstName, lastName, screenName } = member;

  return (
    <ScrollView>
      <Tile
        imageSrc={{ uri: `https://dev-api.12wbt.com/${avatarUrl.original}` }}
        featured
        title={`${firstName} ${lastName}`.toUpperCase()}
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
        <ListItem title="Screen Name" rightTitle={screenName} hideChevron />
        <ListItem title="Country" rightTitle={country} hideChevron />
      </List>
    </ScrollView>
  );
};

export default withNavigation(Profile);
