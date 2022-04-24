import React, { useState } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import { ThemePropsType } from '../interfaces';
import { useThemeContext } from '../state/theme.context';

interface DrawerPropsType {
  open: boolean
}

const HambergerMenu = (): JSX.Element => {
  const { color } = useThemeContext();
  const [open, setOpen] = useState<boolean>(false)
  return (
    <DrawerWrapper className="drawer_wrapper" open={open} bgColor={color.secondary}>
      <HambergerButton className="hamberger_button" bgColor={color.background} onClick={() => setOpen(!open)}>
        <StyledSpan bgColor={color.primary} open={open} />
        <StyledSpan bgColor={color.primary} open={open} />
        <StyledSpan bgColor={color.primary} open={open} />
      </HambergerButton>
      <div className="drawer_menu">
        <Navbar />
      </div>
    </DrawerWrapper>
  )
}

export default HambergerMenu

const DrawerWrapper = styled.div<ThemePropsType & DrawerPropsType>`
  position: fixed;
  top: 0;
  width: 10rem ;
  height:100% ;
  transition: 400ms ease-out;
  background-color: ${p => p.bgColor};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`

const HambergerButton = styled.button<ThemePropsType>`
  display: flex;
  flex-direction:column;
  justify-content:center ;
  align-items: center;
  position:absolute ;
  top: 1rem ;
  left: 10.5rem ;
  height: 2rem ;
  width: 2rem ;
  padding: 0 ;
  border: none ;
  cursor: pointer;
  /* background-color: ${p => p.bgColor}; */
  background-color: transparent;
`

const StyledSpan = styled.span<ThemePropsType & DrawerPropsType>`
  width: 1.6rem ;
  height: .2rem ;
  margin: .1rem 0 ;
  border-radius: .1rem ;
  display: block;
  transition: 400ms ease;
  background-color: ${p => p.bgColor};
  transform-origin: .2rem;
  /* position:${({ open }) => open ? 'absolute' : 'relative'} ; */
  position: relative;

  :first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : ''};
  }
  :nth-child(2){
    opacity: ${({ open }) => open ? 0 : 1};
  }
  :nth-child(3){
    transform: ${({ open }) => open ? 'rotate(-45deg)' : ''};
}
`