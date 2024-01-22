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
        title: "Formule Portrait",
        pathImage: "/assets/images/tarifs/price_image1.jpg",
        priceFormula: [
            {
                subTitle: "Formule Plaisir 120€",
                paragraph: ["1h de Shooting", "1 à 2 tenues", "1 Lieu", "7 Photos Numérique"],
            },
            {
                subTitle: "Formule Détente 230€",
                paragraph: ["2h de shooting", "1 à 2 tenues", "2 Lieux", "13 Photos Numérique"],
            },
            {
                paragraph: ["Suppléments", "10€/photo", "à partir de 40€/personne maquillage professionnelle selon la demande"],
            },
        ],
    },
    {
        title: "Formule Portrait /Couple/Famille",
        pathImage: "/assets/images/tarifs/price_image2.jpg",
        priceFormula: [
            {
                subTitle: "Formule Cupidon",
                paragraph: ["120€ + 40€/pers de +3 ans", " 1h de Shooting", "1 à 2 tenues", "1 Lieu", "7 Photos Numérique"],
            },
            {
                subTitle: "Formule Complicitée",
                paragraph: ["230€ + 40/pers de +3 ans", "2h de shooting", "1 à 2 tenues", "2 Lieux", "13 Photos Numérique"],
            },
            {
                paragraph: ["Suppléments", "10€/photo", "à partir de 40€/personne maquillage professionnelle selon la demande"],
            },
        ],
    },
    {
        title: "Formule Artistique",
        pathImage: "/assets/images/tarifs/price_image3.jpg",
        priceFormula: [
            {
                subTitle: "Formule Art",
                paragraph: [
                    "230€ + 60€/pers de + 3 ans",
                    "1h de Shooting + 30 min de préparation",
                    "1 à 2 tenues",
                    "10 Photos Numérique",
                    "Mise en beauté par une professionnelle disponible",
                ],
            },
            {
                subTitle: "Formule Féérique",
                paragraph: ["Sur Devis", "2h30 de Shooting", "1 tenue", "Maquillage compté dans la formule"],
            },
        ],
    },
];
