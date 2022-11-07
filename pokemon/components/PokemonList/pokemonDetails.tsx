import { useEffect, useState } from 'react'
import {Pokemon} from './pokemonList'
import { Card, Row, Col, Text, Button } from "@nextui-org/react";

export interface PokemonDetailsProps {
  pokemon: Pokemon 
}

export interface PokemonData {
  id:number,
  name:string,
  height:number,
  order:number,
  is_default:boolean,
  location_area_encounters: string,
  sprites: Record<string, string | undefined>,
  // sprites: Record<string, string | string, undefined>,
  // sprites: Array<PokeSprites>,
  types: Array<PokeTypes>
  // types: PokeTypes[]
}

export interface PokeSprites {
  url: string,
}



export interface PokeTypes {
  slot: number,
  type: PokemonType
}

export interface PokemonType {
  name:string,
  url: string
}

const loadDetail = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}


export const PokemonDetails = (props: PokemonDetailsProps) => {
  const [spriteUrl, setSpriteUrl] = useState<string | undefined>(undefined)

  const [data, setData] = useState<PokemonData>()

  useEffect(() => {
    (async () => {
      // const {id, sprites } = await loadDetail(props.pokemon.url)
      // const notNullKey = Object.keys(sprites)
      //   .find((key) => sprites[key] !== null)      
      // notNullKey && setSpriteUrl(sprites[notNullKey])

      const data = await loadDetail(props.pokemon.url)
      setData(data)
      console.log(['data', data]);
    })()
  }, [props.pokemon.url])

  // <Card isPressable>
  // <Card css={{ w: "100%", h: "400px" }} isPressable>

        
  return (
    <>
      {data && 
        <>
        <Card
          css={{
             w: "100%",
             h: "100%",
             borderColor: "black",
            //  borderRadius:"$rounded"
            //  borderRadius:"$xl"
            //  borderRadius:"$pill"
          }}
          isPressable
          variant='bordered'
          borderWeight='extrabold'
          
        >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text 
                  // h3
                  size={14}
                  weight="bold"
                  transform="capitalize"
                  color="#FFFFFF"
                >
                {props.pokemon.name}
                </Text>
                <Text h3 color="black">
                  #{data.id}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{
                p: 0,
                color: "#fff",
                bg: "#f00" // #9E9E9E
              }}>
              <Card.Image
                // src={spriteUrl !==undefined ? spriteUrl: ""}

                // small images only
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+data.id+".png"}

                //offline
                // src={"https://pokeres.bastionbot.org/images/pokemon/"+data.id+".png"}

                alt={props.pokemon.name}
                // objectFit="contain"
                objectFit= 'contain' // komplette anzeige
                // objectFit= 'cover'  // versucht card komplett zu füllen
                // objectFit= 'fill'  //stretched
                // objectFit= 'none'  // original
                // objectFit= 'scale-down'
                // objectFit= 'inherit'
                // objectFit= 'initial'
                // objectFit= 'revert'
                // objectFit= 'unset'
                
                width="100%"
                height={192}

                css={{
                  justifyItems: "flex-start",
                  // position: "absolute",
                  // top: "-25%",
                  // bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid $gray800",
                  bottom: 0,
                  zIndex: 1,
                  color: "#94f9f0",
                  bg: "#94f9f026"
                }}
              />
              <Card.Divider />

                
                {/* {JSON.stringify(data.sprites)}  */}

                {data.sprites && 
                  <h1></h1>
                  // data.sprites.map((sprite, spriteIndex) => (
                  //   <h1></h1>
                  // ))
                }
                

                <Card.Image
                  height={32}
                  width={32}
                  alt="Fire-type Pokemon Symbol - Pokemon Fire Type Logo @clipartmax.com"
                  title="Fire"
                  src={"https://www.clipartmax.com/png/small/83-830894_fire-type-pokemon-symbol-pokemon-fire-type-logo.png"}
                />


              <Card.Divider />

            </Card.Body>
            <Card.Footer css={{ 
                height: "50%",
                // borderTop: "$borderWeights$light solid $gray800",
                borderTop: "$borderWeights$bold solid $black",
              }}>

              <Row>
                <Col span={3}>
                  colspan 3  
                </Col>
              </Row>
              <Row css={{
                    justifyItems: "flex-start",
                    bottom: 0,
                    zIndex: 1,
                    // color: "#94f9f0",
                    // bg: "#94f9f026"
                  }}>
                <Col>
                  col1 
                </Col>
                <Col>
                  col2 
                </Col>
                <Col>
                  col3 
                </Col>
              </Row>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>Types:</Text>
                <ul>
                  {data.types.map((item, index) => ( 
                      <li key={item.slot}>{item.type.name}</li> 
                  ))}
                </ul>
                

                

                <Card.Image
                  height={32}
                  width={32}
                  alt="Pokemon Water Type Symbol @clipartmax.com"
                  title="Water"
                  src={"https://www.clipartmax.com/png/small/26-261578_pokemon-water-type-symbol.png"}

                  

                />    
                <Card.Image
                  height={32}
                  width={32}
                  alt="Fire-type Pokemon Symbol - Pokemon Fire Type Logo @clipartmax.com"
                  title="Fire"
                  src={"https://www.clipartmax.com/png/small/83-830894_fire-type-pokemon-symbol-pokemon-fire-type-logo.png"}
                />
                <Card.Image
                  height={32}
                  width={32}
                  alt="Pokemon Type Symbols Download - Grass Type Pokemon Icon @clipartmax.com"
                  title="Fire"
                  src={"https://www.clipartmax.com/png/small/322-3228843_pokemon-type-symbols-download-grass-type-pokemon-icon.png"}
                />    



 

              </Row>
            </Card.Footer>
          </Card>
          </>
        }
      </>
    )
}