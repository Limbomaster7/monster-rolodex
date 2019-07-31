import React from 'react';
import './App.css';
import {CardList} from './components/CardList/CardList'
import { SearchBox } from './components/SearchBox/SearchBox'
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      monsters: [
        
      ],
      searchField: ""
    }


  }

  // onSearchFieldChange = (event) => {

  //   console.log(event.target.value)

  //   this.setState({
  //     searchField: event.target.value
  //   })

  //   const filteredList = this.state.monsters.filter(monster => {
  //     return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  //   })

  //   this.setState({
  //     monsters: filteredList
  //   })
    
  // }

  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
    
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value })
  }
  
  render() {

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
