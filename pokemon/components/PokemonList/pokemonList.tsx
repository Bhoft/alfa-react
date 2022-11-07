import { Grid, Pagination } from "@nextui-org/react";

import { useEffect, useState } from "react"
import { PokemonDetails } from "./pokemonDetails"

export interface Pokemon {
  name: string
  url: string
}

export const PokemonList = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  const loadPokemons = async () => {
    const offset = (currentPage-1) * pageSize;
    // const responseValue = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const responseValue = await fetch('https://pokeapi.co/api/v2/pokemon?limit='+pageSize+'&offset='+offset)
    
    const data = await responseValue.json()
    setCount(data.count);

    console.log('data', data);
    setPokemonList(data.results)
  }

  useEffect(() => {
    loadPokemons()
  }, [currentPage])

  const pageChangedHandler = (page: number) => {
    console.log('page changed', page)
    setCurrentPage(page)
    // loadPokemons()
  }

  return (
    <>
      <h2>Pokemon List</h2>
      {/* {JSON.stringify(pokemonList)} */}
      <Grid.Container gap={2} justify="flex-start">
      {pokemonList.map((pokemon, index) => (
            <Grid xs={6} sm={3} key={index}>
            <PokemonDetails pokemon={pokemon} />
            </Grid>
      ))}
      </Grid.Container>
      <br />
      <Pagination total={Math.ceil(count/pageSize)} initialPage={currentPage}
        onChange={pageChangedHandler}
      />
  </>)
}