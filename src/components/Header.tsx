import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Navbar from "./Navbar";
import useDetectMobileWindow from "../hooks/use-detect-mobile-window";
const Header = (): JSX.Element => {
    const {isMobile} = useDetectMobileWindow();

    return <HeaderWrapper className="header_wrapper">{!isMobile && <Navbar />}</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
