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
                                <button onClick={() => setOpenSubCategories(!openSubCategories)}>
                                    <StyledH3
                                        color={router.asPath === item.href ? color.primary : returnFontColor()}
                                        isUnderline={router.asPath === item.href ? true : false}
                                        isMobile={isMobile}
                                    >
                                        {item.title}
                                    </StyledH3>
                                </button>
                                {openSubCategories && (
                                    <div>
                                        {item.subCategories.map((subItem: NavbarType) => (
                                            <Link href={subItem.href} passHref key={subItem.id}>
                                                <a
                                                    onClick={() => {
                                                        if (openDrawer) openDrawer();
                                                    }}
                                                >
                                                    <StyledH4
                                                        color={router.asPath === subItem.href ? color.primary : returnFontColor()}
                                                        isUnderline={router.asPath === subItem.href ? true : false}
                                                        isMobile={isMobile}
                                                    >
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
                                        color={router.asPath === item.href ? color.primary : returnFontColor()}
                                        isUnderline={router.asPath === item.href ? true : false}
                                        isMobile={isMobile}
                                        onClick={() => {
                                            if (openDrawer) openDrawer();
                                        }}
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
`;
const StyledUl = styled.ul<ThemePropsType>`
    list-style: none;
    display: flex;
    flex-direction: ${({isMobile}) => (isMobile ? "column" : "row")};
    justify-content: center;
    flex: 1;
    padding-inline-start: 0;
    margin: 4rem 0;
`;

const StyledH3 = styled.h3<ThemePropsType>`
    color: ${(p) => p.color};
    text-decoration: ${({isUnderline}) => (isUnderline ? "underline" : "none")};
    margin: 0 1rem;
    font-size: 1.7rem;
    text-transform: capitalize;

    @media (min-width: 768px) {
        font-size: 1.5rem;
        margin: 0 0.5rem;
    }
    @media (min-width: 1060px) {
        font-size: 1.5rem;
        margin: 0 1rem;
    }
`;

const StyledH4 = styled.h4<ThemePropsType>`
    color: ${(p) => p.color};
    text-decoration: ${({isUnderline}) => (isUnderline ? "underline" : "none")};
    margin: 0 1rem;
    font-size: 1.2rem;
    text-transform: capitalize;

    @media (min-width: 768px) {
        font-size: 1.2rem;
        margin: 0 0.5rem;
    }
    @media (min-width: 1060px) {
        font-size: 1.2rem;
        margin: 0 1rem;
    }
`;
