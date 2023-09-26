'use client'

import { Button } from "@/components/ui/button"
import { Container } from "./Container"
import Image from "next/image"
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

import Link from "next/link"

export const Hero = () => {



  return (
    <div id="home">
      <Container>
        {/* <div
          className={`hidden sm:flex flex-col items-center justify-center gap-y-6 fixed bottom-0 left-24 py-12`}
        >
          <span className="text-xs leading-7 -rotate-90 text-slate-900 dark:text-white">
            SCROLL
          </span>
          <div className="h-[50px] w-[30px] border-[1px] border-zinc-500 dark:border-white rounded-full flex justify-center pt-3">
            <div className="scroll h-2 w-2 ease-linear bg-slate-900 dark:bg-white rounded-full animate-bounce"></div>
          </div>
        </div */}

        <div className="relative h-screen w-full flex flex-col justify-center  gap-4">

          <Image src='/images/boba-tea.gif' alt='boba-tea' width='200' height='200' />
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-5xl font-bold">Hi, <span className="text-sky-500">Alwi's</span> Here</h3>
            <h3 className="text-2xl font-semibold">I create Stuff sometimes</h3>
          </div>
          <p className="max-w-xl text-base">
            I'm a software engineer based in Bandung. I have great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.
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
