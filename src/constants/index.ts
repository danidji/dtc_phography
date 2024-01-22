import {NavbarType, CarouselItemType, PricesItemsType} from "../interfaces";

export const navBarItems: NavbarType[] = [
    {id: "home", title: "à propos", href: "/"},
    {
        id: "individual",
        title: "Particuliers",
        href: "/galeries/particuliers",
        subCategories: [
            {id: "couples", title: "Couples/Familles", href: "/galeries/couples-familles"},
            {id: "artist", title: "Artistique", href: "/galeries/artistique"},
            {id: "portraits", title: "Portraits", href: "/galeries/portraits"},
        ],
    },
    {id: "professional", title: "Professionelles", href: "/galeries/professionelles"},
    {id: "prices", title: "Tarifs", href: "/tarifs"},
    {id: "contact", title: "Contact", href: "/contact"},
];

export const carouselImages: CarouselItemType[] = [
    {id: 1, path: "/assets/images/carrousel/lunysse_caroussel1.jpg"},
    {id: 2, path: "/assets/images/carrousel/lunysse_caroussel2.jpg"},
    {id: 3, path: "/assets/images/carrousel/lunysse_caroussel3.jpg"},
    {id: 4, path: "/assets/images/carrousel/lunysse_caroussel4.jpg"},
    {id: 5, path: "/assets/images/carrousel/lunysse_caroussel5.jpg"},
    {id: 6, path: "/assets/images/carrousel/lunysse_caroussel6.jpg"},
];

export const carouselTestimony: CarouselItemType[] = [
    {
        id: 1,
        path: "/assets/images/temoignages/temoignage1.jpg",
        text: "J’ai eu l’occasion de shooter avec Thien pendant un festival de photo. C’était ma première expérience en tant que modèle et…quelle expérience 😍 \nThien est bienveillante, à l’écoute, et toujours pleine de blagues et de bons conseils pour vous mettre à l’aise. Le résultat était sublime, je suis vraiment contente d’avoir franchi le cap avec elle et pas quelqu’un d’autre 😍",
        name: "Manon",
    },
    {
        id: 2,
        path: "/assets/images/temoignages/temoignage2.jpg",
        text: "Deux super séances avec toi, tu es très gentille, agréable et tu mets à l’aise facilement. Le résultat est top donc tout est parfait, je recommande et d’ailleurs j’espère que l’on se refera des séances 😄",
        name: "Manuela",
    },
    {
        id: 3,
        path: "/assets/images/temoignages/temoignage3.jpg",
        text: "Très agréable moment passée avec Thien avec des photos génialissimes! Thien est passionnée, est à l’écoute et est très professionnelle. Nous avons reçu les clichés dans un temps plus que correct! Je recommande!!!",
        name: "Johanna",
    },
    {
        id: 4,
        path: "/assets/images/temoignages/temoignage4.jpg",
        text: "Un petit café de convivialité + un vrai temps maquillage où l’on est chouchouté + de bons rires 😜 + une communication très claire et professionnelle; le tout pour un rendu vraiment singulier ! Particulièrement ravie de cette expérience !!!",
        name: "Victoria",
    },
    {
        id: 5,
        path: "/assets/images/temoignages/temoignage5.jpg",
        text: "J’ai eu de la chance de travailler régulièrement avec Thien pour différents projets. Tout s’est toujours passé à merveille! Une belle entente couplée de son professionnalisme pour des séances de qualité! Je vous recommande vivement 😇",
        name: "Lauréline",
    },
    {
        id: 6,
        path: "/assets/images/temoignages/temoignage6.jpg",
        text: "J’ai fait 3 séances photos avec Thien et je n’ai jamais été déçu. Photos magnifiques. Passionnée et très inspirée. Amie et photographe formidable.N’hésitez plus !!!!",
        name: "Océane",
    },
];

export const pricesItems: PricesItemsType[] = [
    {
        title: "Formule Portrait Studio solo",
        pathImage: "/assets/images/tarifs/price_image1.jpg",
        priceFormula: [
            {
                subTitle: "Formule Classique 170€",
                paragraph: ["8 photos retouchées", "45min de shooting", "1 tenue", "Mise en beauté "],
            },
            {
                subTitle: "Formule Plaisir 230€",
                paragraph: ["12 photos retouchées", "1h30 de shooting", "2 tenues", "Mise en beauté "],
            },
        ],
    },
    {
        title: "Formule Portrait Duo/Couple/Grossesse",
        pathImage: "/assets/images/tarifs/price_image2.jpg",
        priceFormula: [
            {
                subTitle: "Formule Classique 130€",
                paragraph: ["8 photos retouchées", "45min de shooting", "1 lieu et 1 tenue"],
            },
            {
                subTitle: "Formule Plaisir 230€",
                paragraph: ["12 photos retouchées", "1h30 de shooting", "1 lieu et 2 tenues"],
            },
        ],
    },
    {
        title: "Formule Portrait Extérieur",
        pathImage: "/assets/images/tarifs/price_image3.jpg",
        priceFormula: [
            {
                subTitle: "Formule Classique 90€",
                paragraph: ["7 photos retouchées", "45min de shooting", "1 lieu et 1 tenue"],
            },
            {
                subTitle: "Formule Forfait 130€",
                paragraph: ["10 photos retouchées", "1h30 de shooting", "1 lieu et 2 tenues"],
            },
        ],
    },
];
