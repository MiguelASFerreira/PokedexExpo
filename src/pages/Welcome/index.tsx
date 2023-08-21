import React from 'react';
import LottieView from 'lottie-react-native'
import pokemonAnimation from './pokemon.json'

import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const {navigate} = useNavigation()
  function handleNavigation() {
    navigate('Home')
  }
  return (
    <S.Container>
        <S.Content>
          <S.WrapperIcon >
            <S.IconContent>
              <LottieView 
                style={{width: 200}}
                source={pokemonAnimation} 
                autoPlay
                loop
              />
            </S.IconContent>
          </S.WrapperIcon >
          <S.Title>Bem Vindo</S.Title>
          <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
        </S.Content>
        <S.Footer>
          <Button title='Iniciar' onPress={handleNavigation}/>
        </S.Footer>
    </S.Container>
  )
}

export default Welcome