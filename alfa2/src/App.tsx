import React, {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import ToDoList, { ToDoListProps } from './components/ToDoList/ToDoList';
import FooterNavigation, {FooterNavigationProps} from './components/Footer/FooterNavigation';
import { TestForm } from './components/TestForm/testForm';
import { PokemonList } from './components/Pokemons/pokemonList';
import { PromisePlayground } from './components/PromisePlayground/promisePlayground';

function App() {
  const todoItems = [
    'Gassi gehen',
    'Kinder abholen',
    'Essen kochen']

    const todoListProps: ToDoListProps = {
      itemList: todoItems,
      title: 'Hallo aus einer const'
    }

    const footerNav :FooterNavigationProps = {
      linkList: [
        {
          link : '/copyright',
          label :'Copyright', 
        },
        {
          link : '/copyright',
          label :'Copyright', 
        },
        {
          link : '/copyright',
          label :'Copyright', 
        },
        {
          link : '/impressum',
          label :'Impressum', 
        } 
      ],
      title: 'FooterNav'
    }

  // const loadPokemons = async () => {
  //     // await fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => console.log('daten sind da', response))
  //     // oder 
  //     console.log('loadPokemons called'); 
  //     const responseValue = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     const data = await responseValue.json();
  //     console.log('daten sind da', data);
  // }
  //   // loadPokemons();
    
  // useEffect(() => {
  //     loadPokemons()
  // },[]);


  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="Logo" />
      <h1>Welcome to Alfa2</h1>
      
      <PromisePlayground />
      {/* <PokemonList /> */}
      {/* <TestForm /> */}
      {/* <MainNavigation /> */}
      
      {/* <ToDoList itemList={todoItems} title="Meine Items" /> */}
      {/* <ToDoList {...todoListProps} /> */}
      {/* <FooterNavigation {...footerNav} /> */}
    </div>
  );
}

export default App;

