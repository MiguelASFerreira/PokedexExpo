import styled, { css } from "styled-components/native";

type TypeProps = {
  type:
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

export const PokemonType = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        width: 65px;
        height: 25px;
        padding: 5px;

        background: ${theme.colors.boxType[type]};
        border-radius: 3px;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        margin-top: 10px;
        
    `}
`

export const PokemonTypeText = styled.Text`
    ${({ theme }) => css`
        font-style: normal;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.text_white};
    `}
`