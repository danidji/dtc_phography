import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components';

import { ThemePropsType } from '../interfaces';
import { useThemeContext } from '../state/theme.context';
import useDetectMobileWindow from '../hooks/use-detect-mobile-window';


interface NavbarItemsType {
  id: string,
  title: string
  href: string
}

const navBarItems: NavbarItemsType[] = [
  { id: "home", title: "Accueil", href: "/" },
  { id: "portraits", title: "Portraits", href: "/portraits" },
  { id: "couples", title: "Couples", href: "/couples" },
  { id: "pregnancies", title: "Grossesses", href: "/grossesses" },
  { id: "prices", title: "Tarifs", href: "/tarifs" },
  { id: "contact", title: "Contact", href: "/contact" }
]


const Navbar = (): JSX.Element => {

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
            color={router.pathname === item.href ? color.primary : returnFontColor()}
            isUnderline={router.pathname === item.href ? true : false}
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
  font-size:${({ isMobile }) => isMobile ? "1.7rem" : "2rem"};
`