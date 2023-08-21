import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Card, { Pokemon, PokemonType } from '../../components/Card'

import * as S from './styles'
import meiaPokebola from '../../assets/img/pokeball.png'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { Load } from '../../components/Load'

type Request = {
  id: number;
  types: PokemonType[]
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [load, setLoad] = useState(true)
  const { navigate } = useNavigation()

  function handleNavigation(pokemonId: number) {
    navigate('About', {pokemonId})
  }
  useEffect(() => {
    async function getAllPokemons() {
      try {
        const response = await api.get("/pokemon?limit=1200")
        const { results } = response.data
        
        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const {id, types} = await getMoreInfo(pokemon.url)

            return {
              name: pokemon.name,
              id,
              types
            }
          })
        )
        setPokemons(payloadPokemons)
        setLoad(false)
      } catch (error) {
        console.log(error)
      }finally {
        setLoad(false)
      }
    }
    getAllPokemons()
  }, [])

  async function getMoreInfo(url:string): Promise<Request> {
    const response = await api.get(url)
    const {id, types} = response.data;

    return {
      id, types
    }
  }

  return load ? (
    <S.LoadingScreen>
      <Load />
    </S.LoadingScreen>
  ) : (
    <>
      <S.Container>
        <FlatList 
          ListHeaderComponent={
            <>
              <S.Header source={meiaPokebola} />
              <S.Title>Pokedex</S.Title>
            </>
          }
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 15
          }}
          data={pokemons}
          showsVerticalScrollIndicator={false}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({item: pokemon}) => (
              <Card data={pokemon} onPress={() => {
                handleNavigation(pokemon.id)
              }}/>
          )}
          
        />
      </S.Container>
    </>
  )
}

export default Home