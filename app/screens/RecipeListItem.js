import React from 'react';
import { ListItem } from 'react-native-elements';

export default ({ avatarUri, title }) => (
  <ListItem avatar={{ uri: avatarUri }} title={title} />
);
