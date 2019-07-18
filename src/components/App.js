import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }
  
  onChangeInput = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar value={this.state.searchString} onChange={this.onChangeInput} />
        <div className="container mt-10">
          <div className="row">
            {this.recipes.map(recipe =>(
              <RecipeItem 
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
