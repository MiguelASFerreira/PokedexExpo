import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    ${({theme}) => css`
    flex: 1;
    background: ${theme.colors.backgroundCard.water};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    height: 70%;
    background: ${theme.colors.backgroundCard.water};
    align-items: center;
    justify-content: center;
  `}
`;

export const WrapperIcon  = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background: ${theme.colors.boxType.water};
    border-radius: 100px;
    transform: rotate(30deg);
    align-items: center;
    justify-content: center;
  `}
`

export const IconContent = styled.View`
  transform: rotate(-30deg);
`

export const Footer = styled.View`
    ${({theme}) => css`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background: ${theme.colors.background};
    padding: 20px;
  `}
`;


export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.colors.text_white};
    margin-top: 20px;
  `}
`;


export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    margin-top: 20px;
    color: ${theme.colors.text_white};
  `}
`;
