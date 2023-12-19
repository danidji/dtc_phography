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
            <h1 className="galery_wrapper">{content?.title}</h1>
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
`;

const GridWrapper = styled.div<GridProps>`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(${(p) => (p.isGaleryCouple ? 4 : 10)}, 10rem);
    grid-gap: 1rem;

    @media (min-width: 370px) {
        grid-template-rows: repeat(${(p) => (p.isGaleryCouple ? 4 : 10)}, 17rem);
    }
    @media (min-width: 760px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(${(p) => (p.isGaleryCouple ? 3 : 7)}, 22rem);
    }
    @media (min-width: 1200px) {
        padding: 0 10rem;
        grid-template-rows: repeat(${(p) => (p.isGaleryCouple ? 3 : 7)}, 27rem);
    }
    @media (min-width: 1200px) {
        padding: 0 5rem;
        grid-template-rows: repeat(${(p) => (p.isGaleryCouple ? 3 : 7)}, 33rem);
    }
`;

const ButtonImage = styled.button<ThemePropsType>`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
