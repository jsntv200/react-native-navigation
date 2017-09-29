import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import Spinner from 'react-native-loading-spinner-overlay';

const Recipes = ({ navigation, recipes }) => (
  <ScrollView style={{ marginTop: -20 }}>
    <Spinner visible={recipes.loading} />
    <List>
      {recipes.map(recipe => (
        <ListItem
          key={recipe.id}
          title={recipe.name}
          onPress={() => navigation.navigate('RecipeDetail', { ...recipe })}
          avatar={{
            uri: `https://dev-api.12wbt.com/${recipe.imageUrl.thumb2x}`,
          }}
        />
      ))}
    </List>
  </ScrollView>
);

export default withNavigation(Recipes);
