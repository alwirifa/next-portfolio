'use client'


import { ModeToggle } from "./ModeToggle"
import { Container } from "./Container"

const routes = [
  {
    href: '#home',
    label: 'Home'
  },
  {
    href: '#about',
    label: 'About'
  },
  {
    href: '#project',
    label: 'Project'
  },
  {
    href: '#contact',
    label: 'Contact'
  }
]

export const Navbar = () => {
  return (

    //   <div className={`fixed z-40 top-0 w-full ${theme === 'dark' ? 'bg-zinc-950' : 'bg-white'}`}>

    <div className="fixed top-0 z-40 w-full backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center py-4">
          <a href='/' className="cursor-pointer">
            © Code by Alwi
          </a>
          <nav className="flex flex-row  items-center space-x-6">
            {routes.map((route) => (
              <div>
                <a
                  href={route.href}
                  className="text-sm font-medium hover:text-zinc-600 hover:font-semibold"             >{route.label}</a>
              </div>
            ))}
            <ModeToggle />
          </nav>
        </div>
      </Container>
    </div>
  )
}