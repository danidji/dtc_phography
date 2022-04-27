import { NavbarItemsType, CarouselItemtype } from "../interfaces"

export const navBarItems: NavbarItemsType[] = [
  { id: "home", title: "Accueil", href: "/" },
  { id: "portraits", title: "Portraits", href: "/portraits" },
  { id: "couples", title: "Couples", href: "/couples" },
  { id: "pregnancies", title: "Grossesses", href: "/grossesses" },
  { id: "prices", title: "Tarifs", href: "/tarifs" },
  { id: "contact", title: "Contact", href: "/contact" }
]


export const carouselImages: CarouselItemtype[] = [
  { id: 1, path: "/assets/images/carrousel/lunysse_caroussel1.jpg", },
  { id: 2, path: "/assets/images/carrousel/lunysse_caroussel2.jpg", },
  { id: 3, path: "/assets/images/carrousel/lunysse_caroussel3.jpg", },
  { id: 4, path: "/assets/images/carrousel/lunysse_caroussel4.jpg", },
  { id: 5, path: "/assets/images/carrousel/lunysse_caroussel5.jpg", },
]