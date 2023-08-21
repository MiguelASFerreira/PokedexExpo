import React from 'react'
import * as S from './styles'

import { TouchableOpacity } from 'react-native';

type Props = {
    title: string;
} & TouchableOpacity

export function Button({title, ...rest}: Props) {
  return (
    <S.Container {...rest}>
        <S.Title>{title}</S.Title>
    </S.Container>
  )
}
