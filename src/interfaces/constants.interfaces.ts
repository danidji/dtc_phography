export interface NavbarItemsType {
  id: string,
  title: string
  href: string
}

export interface CarouselItemType {
  id: number;
  path: string,
  text?: string,
}

export interface PriceFormulaType {
  subTitle: string,
  paragraph: string[]
}

export interface PricesItemsType {
  title: string,
  pathImage: string
  priceFormula: PriceFormulaType[]
}