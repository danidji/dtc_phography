import styled from 'styled-components'
import { ThemePropsType } from '../src/interfaces'

export const StyledButton = styled.button<ThemePropsType>`
  background-color: ${p => p.bgColor};
  padding:1.5rem ;
  font-size: 1.5rem ;
  font-weight:bold ;
  color: #fff;
  border: none;
  border-radius: .7rem ;
  text-transform:uppercase ;
  cursor: pointer;
  margin: 2rem 0;
  background-image: linear-gradient(110deg, #d39c2f 0%, #6a4e19 82%);

`

export const StyledP = styled.p<ThemePropsType>`
  font-size: 1rem ;
  text-align: center ;
  color: ${p => p.color};
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  `