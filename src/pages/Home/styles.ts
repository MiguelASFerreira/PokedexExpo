import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native';

const windowWidth =  Dimensions.get('window').width

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
    ${({theme}) => css`
    flex: 1;
    background: ${theme.colors.background};
    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    height: 220px;
    background-color: ${theme.colors.background};
    margin-left: -20px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light_text};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
  `}
`