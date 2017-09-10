import React from 'react';
import { ListItem } from 'react-native-elements';

export default ({ avatarUri, id, title }) => (
  <ListItem key={id} avatar={{ uri: avatarUri }} title={title} />
);
