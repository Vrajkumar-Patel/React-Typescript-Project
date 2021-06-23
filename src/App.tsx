import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//
import List from './components/List';
import AddToList from "./components/AddToList"

export interface Istate{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[] | undefined
}

function App() {

  const [people, setPeople] = useState<Istate['people']>([{
    name: "abcd",
    age: 32,
    url: 'https://source.unsplash.com/user/erondu/1600x900',
    note: 'Hello World'
  }])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
