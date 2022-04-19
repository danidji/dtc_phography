import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../state/theme.context'
import { ThemePropsType } from '../interfaces';

const GlobalTheme = ({ children }: { children: ReactNode }) => {
  const { color } = useThemeContext();
  return (
    <GlobalStyledDiv bgColor={color.background} color={color.secondary}>
      {children}
    </GlobalStyledDiv>
  )
}

export default GlobalTheme;

const GlobalStyledDiv = styled.div <ThemePropsType>`
  background-color: ${props => props.bgColor};
  color:${props => props.color} ;
  margin: 0;
  padding:0 ;
  height:100vh ;
  width:100vw ;
`