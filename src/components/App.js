import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeItem from './RecipeItem';
import recipes from '../sample_data/recipes.json';

class App extends Component {
  recipes = recipes.results;
  state = {
    searchString: '',
    recipesFiltered: this.recipes
  };
  
  onChangeInput = (e) => {
    this.setState({
      searchString: e.target.value
    })
    const listTemp = this.filtro(this.state.searchString);
    this.setState({
      recipesFiltered: listTemp
    })
    console.log(this.state.searchString);
  }

//  filtro = (termo) => {
//    return this.recipes.filter( recipe => 
//      recipe.title.toLowerCase().indexOf(termo.toLowerCase()) || recipe.ingredients.toLowerCase().indexOf(termo.toLowerCase())
//    )
//  }

  filtro = (termo) => {
    return this.recipes.filter( recipe => 
      recipe.title.toLowerCase().indexOf(termo.toLowerCase()) > -1 || 
      recipe.ingredients.toLowerCase().indexOf(termo.toLowerCase()) > -1 )
  }

  render() { 

    return (
      <div className="App">
        <Navbar value={this.state.searchString} onChange={this.onChangeInput} />
        <div className="container mt-10">
          <div className="row">
            {this.state.recipesFiltered.map( (recipe, index) =>(
              <RecipeItem 
                key={index}
                title={recipe.title}
                href={recipe.href}
                ingredients={recipe.ingredients}
                thumbnail={recipe.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;