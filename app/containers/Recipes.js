import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { recipesFetch } from '../logic/recipes';
import RecipeListItem from '../screens/RecipeListItem';

class RecipesContainer extends Component {
  componentWillMount() {
    this.props.recipesFetch();
  }

  render() {
    const { recipes, navigation } = this.props;

    return (
      <ScrollView style={{ marginTop: -20 }}>
        <List>
          {recipes.list.map(item => (
            <RecipeListItem
              id={item.id}
              avatarUri={`https://dev-api.12wbt.com/${item.imageUrl.thumb2x}`}
              title={item.name}
              onPress={() => navigation.navigate('UserDetail', { ...user })}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes,
});

const mapDispatchToProps = dispatch => ({
  recipesFetch: page => dispatch(recipesFetch(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
