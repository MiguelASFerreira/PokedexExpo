import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation} from '@react-navigation/native'
import { ScrollView, Alert, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import { useTheme } from 'styled-components';

import * as S from './styles'

import CardAnimation from '../../components/CardAnimation';
import CardType from '../../components/CardType';

import circle from '../../assets/img/circle.png';
import dots from '../../assets/img/dots.png';
import { Load } from '../../components/Load';

interface IAttributes {
    base_stat: number;
    stat: {
      name: string;
    };
  }
  
  interface IAbilitys {
    ability: {
      name: string;
    };
  }
  
  type PokemonTypes = {
    type: {
      name:
        | 'grass'
        | 'fire'
        | 'water'
        | 'poison'
        | 'normal'
        | 'bug'
        | 'flying'
        | 'eletric'
        | 'ground'
        | 'psychic'
        | 'fighting'
        | 'rock'
        | 'steel'
        | 'ice'
        | 'ghost'
        | 'dragon'
        | 'dark'
        | 'fairy';
    };
  };

type PokemonProps = {
    id: number;
    name: string;
    stats: IAttributes[];
    abilities: IAbilitys[];
    types: PokemonTypes[];
    color: string;
  };

type RouteParams = {
    pokemonId: number;
}


const About = () => {
  const route = useRoute()
  const {pokemonId} = route.params as RouteParams
  const {colors} = useTheme()
  const { goBack } = useNavigation()

  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function getPokemonDetail() {
        try {
            const response = await api.get(`/pokemon/${pokemonId}`)
            const { stats, abilities, id, name, types } = response.data
            
            const currentType = types[0].type.name as PokemonTypes
            const color = colors.backgroundCard[currentType]
            setPokemon({
              stats, abilities, id, name, types, color
            })
            setLoad(false)
        } catch (error) {
            Alert.alert("Ops, aconteceu algum erro!!")
            setLoad(false)
        } finally {
            setLoad(false)
        }
    }
    getPokemonDetail()
  }, [])

  function handleGoBack() {
    goBack()
  }

  return <>
    {load ? <>
      <S.LoadingScreen>
      <Load />
    </S.LoadingScreen>
    </> : 
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton>
                <Feather onPress={handleGoBack} name="chevron-left" size={24} color="#fff"/>
            </S.BackButton>

            <S.ContentImage>
              <S.CircleImage source={circle} />
              <CardAnimation>
                  <S.PokemonImage source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                  }} /> 
              </CardAnimation>
            </S.ContentImage>

            <S.Content>
                <CardAnimation>
                  <S.PokemonId># {pokemon.id}</S.PokemonId>
                  <S.PokemonName>{pokemon.name}</S.PokemonName>

                  <S.PokemonTypeContainer>
                      {pokemon.types.map(({type}) => 
                      <CardType key={type.name} type={type.name} typeName={type.name} />)}
                  </S.PokemonTypeContainer>
                </CardAnimation>
            </S.Content> 
            <S.DotsImage source={dots}/>
        </S.Header>
        <S.Container>
          <S.Title type={pokemon.types[0].type.name}>Base States</S.Title>

          {
            pokemon.stats.map(attribute => 
              <S.StatusBar key={attribute.stat.name}>
                <S.Attribute>{attribute.stat.name}</S.Attribute>
                <S.AttributeValue>{attribute.base_stat}</S.AttributeValue>
                <S.ContentBar>
                  <S.ProgressBar 
                    type={pokemon.types[0].type.name}
                    borderWidth={0}
                    progress={100}
                    width={attribute.base_stat}
                    color={pokemon.color}
                  />
                </S.ContentBar>
              </S.StatusBar>
            )
          }

          <S.Title type={pokemon.types[0].type.name}>Abilities</S.Title>

          {
            pokemon.abilities.map(currentyAbilitiy => <S.Ability>
                {currentyAbilitiy.ability.name}
              </S.Ability>
            )
          }

        </S.Container>
    </ScrollView>}
  </>
}

export default About
