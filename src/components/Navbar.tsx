import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import styled from "styled-components";

import {ThemePropsType, NavbarType} from "../interfaces";
import {useThemeContext} from "../state/theme.context";
import useDetectMobileWindow from "../hooks/use-detect-mobile-window";
import {navBarItems} from "../constants";

interface PropsType {
    openDrawer?: () => void;
}

const Navbar = ({openDrawer}: PropsType): JSX.Element => {
    const {color} = useThemeContext();
    const router = useRouter();
    const {isMobile} = useDetectMobileWindow();
    const [openSubCategories, setOpenSubCategories] = useState<boolean>(false);

    const returnFontColor = (): string => {
        return isMobile ? color.background : color.secondary;
    };

    return (
        <StyledUl isMobile={isMobile}>
            {navBarItems.map(
                (item: NavbarType): JSX.Element => (
                    <StyledLi key={item.id}>
                        {item.subCategories ? (
                            <>
                                <NavButton onClick={() => setOpenSubCategories(!openSubCategories)}>
                                    <StyledH3 isMobile={isMobile} color={color.primary}>
                                        {item.title}
                                    </StyledH3>
                                </NavButton>
                                {openSubCategories && (
                                    <div>
                                        {item.subCategories.map((subItem: NavbarType) => (
                                            <Link href={subItem.href} passHref key={subItem.id}>
                                                <a
                                                    onClick={() => {
                                                        if (openDrawer) openDrawer();
                                                    }}
                                                >
                                                    <StyledH4 color={color.primary} isMobile={isMobile}>
                                                        {subItem.title}
                                                    </StyledH4>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link href={item.href} passHref>
                                <a
                                    onClick={() => {
                                        if (openDrawer) openDrawer();
                                    }}
                                >
                                    <StyledH3
                                        isMobile={isMobile}
                                        onClick={() => {
                                            if (openDrawer) openDrawer();
                                        }}
                                        color={color.primary}
                                    >
                                        {item.title}
                                    </StyledH3>
                                </a>
                            </Link>
                        )}
                    </StyledLi>
                )
            )}
        </StyledUl>
    );
};

export default Navbar;

const StyledLi = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const StyledUl = styled.ul<ThemePropsType>`
    list-style: none;
    display: flex;
    flex-direction: ${({isMobile}) => (isMobile ? "column" : "row")};
    justify-content: center;
    flex: 1;
    padding-inline-start: 0;
    height: 5rem;
    margin: 6rem 0 2rem 0;
    gap: 2rem;

    @media (max-width: 850px) {
        justify-content: flex-start;
        height: 100%;
        margin: 0;
        gap: 1rem;
    }
`;

const StyledH3 = styled.h3<ThemePropsType>`
    color: #fff;
    margin: 0;
    font-size: 1.5rem;

    text-transform: capitalize;
    font-weight: 400;
    margin: 0;
    :hover {
        color: ${({color}) => color};
    }

    @media (max-width: 850px) {
        font-size: 1.2rem;

        :hover {
            color: #000;
        }
    }
`;

const StyledH4 = styled.h4<ThemePropsType>`
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    margin: 0;

    :hover {
        color: ${({color}) => color};
    }

    @media (max-width: 850px) {
        :hover {
            color: #000;
        }
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;

    @media (max-width: 850px) {
        text-align: left;
    }
`;
