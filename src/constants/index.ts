import { NavbarItemsType, CarouselItemType, PricesItemsType } from "../interfaces"

export const navBarItems: NavbarItemsType[] = [
  { id: "home", title: "Accueil", href: "/" },
  { id: "portraits", title: "Portraits", href: "/galeries/portraits" },
  { id: "couples", title: "Couples", href: "/galeries/couples" },
  { id: "pregnancies", title: "Grossesses", href: "/galeries/grossesses" },
  { id: "prices", title: "Tarifs", href: "/tarifs" },
  { id: "contact", title: "Contact", href: "/contact" }
]


export const carouselImages: CarouselItemType[] = [
  { id: 1, path: "/assets/images/carrousel/lunysse_caroussel1.jpg", },
  { id: 2, path: "/assets/images/carrousel/lunysse_caroussel2.jpg", },
  { id: 3, path: "/assets/images/carrousel/lunysse_caroussel3.jpg", },
  { id: 4, path: "/assets/images/carrousel/lunysse_caroussel4.jpg", },
  { id: 5, path: "/assets/images/carrousel/lunysse_caroussel5.jpg", },
  { id: 6, path: "/assets/images/carrousel/lunysse_caroussel6.jpg", },
]

export const pricesItems: PricesItemsType[] = [
  {
    title: "Formule Portrait Studio solo",
    pathImage: "/assets/images/tarifs/price_image1.jpg",
    priceFormula: [
      {
        subTitle: "Formule Classique 170€",
        paragraph: ["8 photos retouchées", "45min de shooting", "1 tenue", "Mise en beauté "]
      },
      {
        subTitle: "Formule Plaisir 230€",
        paragraph: ["12 photos retouchées", "1h30 de shooting", "2 tenues", "Mise en beauté "]
      }
    ]
  },
  {
    title: "Formule Portrait Duo/Couple/Grossesse",
    pathImage: "/assets/images/tarifs/price_image2.jpg",
    priceFormula: [
      {
        subTitle: "Formule Classique 130€",
        paragraph: ["8 photos retouchées", "45min de shooting", "1 lieu et 1 tenue"]
      },
      {
        subTitle: "Formule Plaisir 230€",
        paragraph: ["12 photos retouchées", "1h30 de shooting", "1 lieu et 2 tenues"]
      }
    ]
  },
  {
    title: "Formule Portrait Extérieur",
    pathImage: "/assets/images/tarifs/price_image3.jpg",
    priceFormula: [
      {
        subTitle: "Formule Classique 90€",
        paragraph: ["7 photos retouchées", "45min de shooting", "1 lieu et 1 tenue"]
      },
      {
        subTitle: "Formule Forfait 130€",
        paragraph: ["10 photos retouchées", "1h30 de shooting", "1 lieu et 2 tenues"]
      }
    ]
  }
]