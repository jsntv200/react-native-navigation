import React, { Component } from 'react';
import { connect } from 'react-redux';

import { recipesFetch } from '../logic/recipes';
import Recipes from '../screens/Recipes';

class RecipesContainer extends Component {
  componentWillMount() {
    this.props.recipesFetch();
  }

  render() {
    return <Recipes recipes={this.props.recipes.list} />;
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes,
});

const mapDispatchToProps = {
  recipesFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
