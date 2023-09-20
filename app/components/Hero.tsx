'use client'

import { Button } from "@/components/ui/button"
import { Container } from "./Container"
import Image from "next/image"
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { useEffect, useState } from "react"

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from "next/link"

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Frontend development", "Backend development", "IoT depelovment", "Data Analytics"
    ],
    loop: true,
    delaySpeed: 2000,
  })


  return (
    <div id="home">
      <Container>
        <div
          className={`hidden sm:flex flex-col items-center justify-center gap-y-6 fixed bottom-0 left-24 py-12`}
        >
          <span className="text-xs leading-7 -rotate-90 text-slate-900 dark:text-white">
            SCROLL
          </span>
          <div className="h-[50px] w-[30px] border-[1px] border-zinc-500 dark:border-white rounded-full flex justify-center pt-3">
            <div className="scroll h-2 w-2 ease-linear bg-slate-900 dark:bg-white rounded-full animate-bounce"></div>
          </div>
        </div>

        <div className="relative h-screen w-full flex flex-col justify-center items-center gap-4">
          <div className="w-24 h-24 rounded-full border">
            <Image alt='alwi' src='/images/logo.png' width='100' height='100' className="rounded-full" />
          </div>
          <div className="leading-tight text-center mt-6">
            <h3 className="text-4xl font-bold">I'm Alwi Rifa</h3>
            <h3 className="text-2xl font-bold">I'm into {" "} <span className="text-sky-500">{text}</span></h3>
          </div>
          <p className="max-w-xl text-center">Proficient at troubleshooting issues related to web development, Iot, data analytic, databases, servers, and networks. Skilled in crafting aesthetically UI, user-friendly websites using multiple languages and frameworks.
          </p>
          <div className='flex gap-2 '>
            <Button variant='outline'>
              <Link href='https://www.linkedin.com/in/ilham-alwi/' target="_blank" className="flex items-center justify-center gap-2">
                <AiFillLinkedin size={20} />
                <p>
                  LinkedIn
                </p>
              </Link>
            </Button>
            <Button>
              <Link href='https://github.com/AlwiRifa' target="_blank" className="flex items-center justify-center gap-2">
                <AiOutlineGithub size={20} />
                <p>
                  GitHub
                </p>
              </Link>
            </Button>
          </div>
        </div>


      </Container>
    </div>

  )
}