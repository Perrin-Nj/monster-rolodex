import './App.css';
import React from 'react';

import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this); //what is in bind specifies the contest of the object
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {//To set the contest of handleChange to 'this' of our app component
    this.setState({ searchField: e.target.value });
  }//Here, the state is the value which is being typed by the user

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (

      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search a monster'
          handleChange={this.handleChange}
        />
        < Cardlist monsters={filteredMonsters} />
      </div>

    );
  }
}

export default App;
