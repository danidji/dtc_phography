import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components';

import { ThemePropsType, NavbarItemsType } from '../interfaces';
import { useThemeContext } from '../state/theme.context';
import useDetectMobileWindow from '../hooks/use-detect-mobile-window';
import { navBarItems } from '../constants';

const Navbar: FC = (): JSX.Element => {

  const { color } = useThemeContext()
  const router = useRouter()
  const { isMobile } = useDetectMobileWindow()

  const returnFontColor = (): string => {
    return isMobile ? color.background : color.secondary
  }

  const renderNavLink = (items: NavbarItemsType[]): JSX.Element[] => {
    return items.map((item: NavbarItemsType): JSX.Element => (
      <StyledLi key={item.id}>
        <Link href={item.href} passHref>
          <StyledH3
            color={router.asPath === item.href ? color.primary : returnFontColor()}
            isUnderline={router.asPath === item.href ? true : false}
            isMobile={isMobile}
          >
            {item.title}
          </StyledH3>

        </Link>
      </StyledLi>
    ))
  }
  return (
    <StyledUl isMobile={isMobile}>
      {renderNavLink(navBarItems)}
    </StyledUl>
  )
}

export default Navbar

const StyledLi = styled.li`
  cursor: pointer;
`
const StyledUl = styled.ul<ThemePropsType>`
  list-style:none ;
  display: flex ;
  flex-direction: ${({ isMobile }) => isMobile ? "column" : "row"} ;
  justify-content: ${({ isMobile }) => !isMobile ? "flex-end" : "center"};
  flex: 2;
  padding-inline-start: 0;
`

const StyledH3 = styled.h3<ThemePropsType>`
  color: ${p => p.color};
  text-decoration: ${({ isUnderline }) => isUnderline ? "underline" : "none"} ;
  margin:0 1rem ;
  font-size: 1.7rem;

  @media (min-width: 768px) {
    font-size: 1.5rem ;
    margin:0 .5rem ;
  }
  @media (min-width: 1060px) {
    font-size: 1.7rem ;
    margin:0 1rem ;
  }

`