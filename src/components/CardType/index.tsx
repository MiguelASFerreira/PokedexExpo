import React from 'react'

import * as S from './styles'

type TypePokemon = {
    type: string;
    typeName: string;
}

const CardType = ({type, typeName}: TypePokemon) => {
  return (
    <S.PokemonType type={type}>
        <S.PokemonTypeText>{typeName}</S.PokemonTypeText>
    </S.PokemonType>
  )
}

export default CardType