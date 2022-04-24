import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components';

import { ThemePropsType } from '../interfaces';
import { useThemeContext } from '../state/theme.context';
import useWindowDimensions from '../hooks/use-window-dimension'


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

  const { color } = useThemeContext();
  const { width } = useWindowDimensions();
  const router = useRouter();

  console.log({ router })

  const renderNavLink = (items: NavbarItemsType[]): JSX.Element[] => {
    return items.map((item: NavbarItemsType): JSX.Element => (
      <StyledLi key={item.id}>
        <Link href={item.href} passHref>
          <StyledH3
            color={router.pathname === item.href ? color.primary : color.background}
            isUnderline={router.pathname === item.href ? true : false}
          >
            {item.title}
          </StyledH3>

        </Link>
      </StyledLi>
    ))
  }
  return (
    <StyledUl>
      {renderNavLink(navBarItems)}
    </StyledUl>
  )
}

export default Navbar

const StyledLi = styled.li`
  cursor: pointer;
`
const StyledUl = styled.ul`
  list-style:none ;
`

const StyledH3 = styled.h3<ThemePropsType>`
  color: ${p => p.color};
  text-decoration: ${({ isUnderline }) => isUnderline ? "underline" : "none"} ;
`