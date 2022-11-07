import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { PokemonList } from "../components/PokemonList/pokemonList";
  
export default function App() {
  return (
    <>
    <PokemonList />
    </>
  );
}