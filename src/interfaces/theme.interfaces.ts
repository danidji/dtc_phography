interface ColorType {
  primary: string,
  secondary: string,
  background: string,
  primaryOp50: string

}

export interface ThemeContextType {
  color: ColorType
}

export interface ThemePropsType {
  bgColor?: string,
  color?: string,
  borderColor?: string,
  isUnderline?: boolean,
  isMobile?: boolean | null
}