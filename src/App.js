import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [searchField, setSearchField] = useState('');   // [value, setValue] each hook hookes into one value gives back a single value
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
    // console.log('effect is firing')
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  // const filteredMonsters = monsters.filter((monster) => {
    // return monster.name.toLocaleLowerCase().includes(searchField);
  // })

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
        className='monster-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
