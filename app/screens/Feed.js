import React from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

export default ({ navigation }) => (
  <ScrollView style={{ marginTop: -20 }}>
    <List>
      {users.map(user => (
        <ListItem
          key={user.login.username}
          roundAvatar
          avatar={{ uri: user.picture.thumbnail }}
          title={`${user.name.first} ${user.name.last}`.toUpperCase()}
          subtitle={user.email}
          onPress={() => navigation.navigate('UserDetail', { ...user })}
        />
      ))}
    </List>
  </ScrollView>
);
