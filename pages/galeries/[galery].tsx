import React, {useState} from "react";
import {GetStaticPaths, GetStaticProps, GetServerSideProps} from "next";
import {useRouter} from "next/router";
import Image from "next/image";
import styled from "styled-components";
import {PageContentType} from "../../back-end/models/pages.interface";
import {axiosGetPageContent} from "../../src/repositories/pages.repo";
import {ThemePropsType} from "../../src/interfaces";
import {useThemeContext} from "../../src/state/theme.context";
import SingleImage from "../../src/components/SingleImage";

interface GaleryProps {
    content: PageContentType | null;
}

interface GridProps {
    isGaleryCouple: boolean;
}

const Galery = ({content}: GaleryProps): JSX.Element => {
    const {color} = useThemeContext();
    const router = useRouter();
    const [displayImage, setDisplayImage] = useState<string | null>(null);

    return (
        <GaleryWrapper className="galery_wrapper">
            <StyledH1 color={color.secondary} className="galery_wrapper">
                {content?.title}
            </StyledH1>
            <GridWrapper className="grid_wrapper" isGaleryCouple={router.asPath === "/galeries/couples-grossesses" ? true : false}>
                {content?.imagesUrl ? (
                    content.imagesUrl.map((imageSrc: string, i: number): JSX.Element => {
                        return (
                            <ButtonImage key={i} className="images_button" bgColor={color.primaryOp50} onClick={() => setDisplayImage(imageSrc)}>
                                <div className="image_wrapper" style={{position: "relative", height: "100%", width: "100%"}}>
                                    <Image src={imageSrc} layout="fill" objectFit="cover" alt={`photo ${content?.title}`} priority />
                                </div>
                            </ButtonImage>
                        );
                    })
                ) : (
                    <></>
                )}
            </GridWrapper>
            {displayImage && <SingleImage src={displayImage} close={() => setDisplayImage(null)} />}
        </GaleryWrapper>
    );
};

export default Galery;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    let pageContent: PageContentType | null = null;
    if (typeof params?.galery === "string") {
        console.log(params.galery);
        pageContent = await axiosGetPageContent(params.galery);
    }

    return {
        props: {content: pageContent ?? null},
    };
};

const GaleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 3rem;

    @media (max-width: 850px) {
        padding: 0 1rem;
    }
`;

const GridWrapper = styled.div<GridProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const ButtonImage = styled.button<ThemePropsType>`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 9rem;
    height: 20rem;

    @media (max-width: 850px) {
        width: 8rem;
        height: 15rem;
    }
`;

const StyledH1 = styled.h1<ThemePropsType>`
    color: ${(p) => p.color};

    @media (max-width: 850px) {
        font-size: 1.5rem;
        margin: 3rem 0;
    }
`;
