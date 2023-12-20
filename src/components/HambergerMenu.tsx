import React, {useState} from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import {ThemePropsType} from "../interfaces";
import {useThemeContext} from "../state/theme.context";

interface DrawerPropsType {
    open: boolean;
}

interface PropsType {
    openDrawer: () => void;
    open: boolean;
}

const HambergerMenu = ({openDrawer, open}: PropsType): JSX.Element => {
    const {color} = useThemeContext();

    return (
        <DrawerWrapper className="drawer_wrapper" open={open} bgColor={color.primary}>
            <HambergerButton className="hamberger_button" onClick={openDrawer}>
                <StyledSpan bgColor={color.primary} open={open} />
                <StyledSpan bgColor={color.primary} open={open} />
                <StyledSpan bgColor={color.primary} open={open} />
            </HambergerButton>
            <DrawerMenu className="drawer_menu">
                <Navbar openDrawer={openDrawer} />
            </DrawerMenu>
        </DrawerWrapper>
    );
};

export default HambergerMenu;

const DrawerWrapper = styled.div<ThemePropsType & DrawerPropsType>`
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 13rem;
    height: 100%;
    transition: 400ms ease-out;
    background-color: ${(p) => p.bgColor};
    transform: ${({open}) => (open ? "translateX(-3rem)" : "translateX(-16rem)")};
`;

const HambergerButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    left: 13.5rem;
    height: 2rem;
    width: 2rem;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
`;

const StyledSpan = styled.span<ThemePropsType & DrawerPropsType>`
    width: 1.6rem;
    height: 0.2rem;
    margin: 0.1rem 0;
    border-radius: 0.1rem;
    display: block;
    transition: 400ms ease;
    background-color: ${(p) => p.bgColor};
    transform-origin: 0.2rem;
    position: relative;

    :first-child {
        transform: ${({open}) => (open ? "rotate(45deg)" : "")};
    }
    :nth-child(2) {
        opacity: ${({open}) => (open ? 0 : 1)};
    }
    :nth-child(3) {
        transform: ${({open}) => (open ? "rotate(-45deg)" : "")};
    }
`;

const DrawerMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 1rem 0;

    @media (max-width: 850px) {
        margin: 0;
        padding: 1rem;
    }
`;
