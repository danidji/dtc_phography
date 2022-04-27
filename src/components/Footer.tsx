import React, { FC } from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import { navBarItems } from '../constants';
import { NavbarItemsType, ThemePropsType } from '../interfaces';
import { useThemeContext } from '../state/theme.context';

const Footer: FC = (): JSX.Element => {
  const { color } = useThemeContext()


  const renderNavLink = (items: NavbarItemsType[]): JSX.Element[] => {
    return items.map((item: NavbarItemsType) => (
      <StyledLi key={item.id}>
        <Link href={item.href} passHref>
          <div>{item.title}</div>
        </Link>
      </StyledLi>
    ))
  }
  return (
    <FooterWrapper className="footer_wrapper" borderColor={color.primary}>
      <div className="sitemap_wrapper">

        <div>Plan du site :</div>
        <StyledUl>
          {renderNavLink(navBarItems)}
        </StyledUl>
      </div>
      <div>Mentions Légales</div>

    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.div<ThemePropsType>`
  height: 15rem ;
  border-top: 1px solid ${p => p.borderColor} ;
  opacity:.5 ;
  margin: 4rem 1rem ;
  padding: 1rem ;
  display: flex;
  justify-content: space-around ;
`
const StyledUl = styled.ul`
  list-style:none ;
`
const StyledLi = styled.li`
  cursor: pointer ;
`