import React from 'react'
import Link from 'next/link'

interface NavbarItemsType {
  id: string,
  title: string
  href: string
}

const navBarItems: NavbarItemsType[] = [
  { id: "home", title: "Accueil", href: "/" },
  { id: "portraits", title: "Portraits", href: "/portraits" },
  { id: "couples", title: "Couples", href: "/couples" },
  { id: "pregnancies", title: "Grossesses", href: "/grossesses" },
  { id: "prices", title: "Tarifs", href: "/tarifs" },
  { id: "contact", title: "Contact", href: "/contact" }
]

const renderNavLink = (items: NavbarItemsType[]): JSX.Element[] => {
  return items.map((item: NavbarItemsType): JSX.Element => (
    <li key={item.id}>
      <Link href={item.href}>
        <a>{item.title}</a>
      </Link>
    </li>
  ))
}

const Navbar = (): JSX.Element => {

  return (
    <ul>
      {renderNavLink(navBarItems)}
    </ul>
  )
}

export default Navbar