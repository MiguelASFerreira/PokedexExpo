import React from 'react'
import * as S from './styles'
import dotsImage from '../../assets/img/dots.png';
import pokeballCardImage from '../../assets/img/pokeballCard.png'
import { TouchableOpacity } from 'react-native';
import CardAnimation from '../CardAnimation';
import CardType from '../CardType';

export type PokemonType = {
    type: {
      name: string;
    }
  }
  
export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[]
  }

type CardProps  = {
    data: Pokemon
} & TouchableOpacity


const Card = ({ data, ...rest}: CardProps ) => {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
        <S.LeftSide>
            <S.PokemonId>#{data.id}</S.PokemonId>
            <S.PokemonName>{data.name}</S.PokemonName>
            <S.ImageCardDetailLeftSide source={dotsImage}/>
            <S.PokemonContentType>
                {data.types.map(pokemonType => <CardType type={pokemonType.type.name} typeName={pokemonType.type.name} />)}
            </S.PokemonContentType>
        </S.LeftSide>
          <S.RightSide>
            <S.PokeballCardDetail source={pokeballCardImage} />
            <CardAnimation>
              <S.PokemonImage
                  source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                  }}
                  />
            </CardAnimation>
          </S.RightSide>
    </S.PokemonCard>
  )
}

export default Card