interface ColorType {
  primary: string,
  secondary: string,
  background: string,

}

export interface ThemeContextType {
  color: ColorType
}

export interface ThemePropsType {
  bgColor?: string,
  color?: string,
  borderColor?: string,
  isUnderline?: boolean
}