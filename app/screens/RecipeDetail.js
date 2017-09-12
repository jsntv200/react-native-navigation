import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, List, ListItem, Tile } from 'react-native-elements';

export default ({ navigation }) => {
  const {
    ingredientsList,
    imageUrl,
    name,
    publicSeoDescription,
    summary,
  } = navigation.state.params;

  return (
    <ScrollView>
      <Tile
        featured
        imageSrc={{ uri: `https://dev-api.12wbt.com/${imageUrl.large}` }}
        title={`${name}`.toUpperCase()}
      />
      <Text style={{ padding: 20 }}>
        {summary || publicSeoDescription}
      </Text>
      <Card
        title="INGREDIENT CHECKLIST"
        divider={false}
        containerStyle={{ marginTop: 0, marginBottom: 20 }}
      >
        <List style={{ marginTop: -15 }}>
          {ingredientsList.map((title, i) =>
            <ListItem
              key={i}
              title={title}
              leftIcon={{ name: 'check-box-outline-blank' }}
              hideChevron
              containerStyle={{ borderBottomColor: '#e1e8ee' }}
            />
          )}
        </List>
      </Card>
    </ScrollView>
  );
};
