'use client'


import { ModeToggle } from "./ModeToggle"
import { Container } from "./Container"
import { useState } from "react"

import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md'

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
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }
  return (
    <div className="fixed top-0 z-40 w-full backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center py-4">
          <a href='/' className="cursor-pointer">
            © Code by Alwi
          </a>
          <nav className="hidden md:flex flex-row  items-center space-x-6">
            {routes.map((route) => (
              <div key={route.label}>
                <a
                  href={route.href}
                  className="text-sm font-medium hover:text-zinc-600 hover:font-semibold"             >{route.label}</a>
              </div>
            ))}
            <ModeToggle />
          </nav>

          <div className="md:hidden flex">
            <button onClick={handleClick}>
              {menu ?
                <MdOutlineClose size={24} />
                :
                <MdOutlineMenu size={24} />
              }
            </button>
            {menu && (
              <div className="bg-white absolute top-16 right-2 flex flex-col p-1 border-[1px] rounded-lg">
                {/* Tambahkan item menu di sini */}
                <a className="py-2 px-4 hover:bg-zinc-100 rounded-lg" href="#home">Home</a>
                <a className="py-2 px-4 hover:bg-zinc-100 rounded-lg" href="#about">About</a>
                <a className="py-2 px-4 hover:bg-zinc-100 rounded-lg" href="#project">Project</a>
                <a className="py-2 px-4 hover:bg-zinc-100 rounded-lg" href="#contact">Contact</a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}