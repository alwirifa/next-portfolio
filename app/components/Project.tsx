'use client'

import { useState } from "react"
import { Container } from "./Container"
import { AiOutlineStar } from "react-icons/ai"
import { RxExternalLink } from "react-icons/rx"
import { Button } from "@/components/ui/button"
import Link from "next/link"



interface CardProps {
  title?: string,
  text?: string,
  img?: string,
  href?: string | undefined
}

export const Card = ({ title, text, img, href }: CardProps) => {
  return (
    <div id='project' className='flex flex-col justify-start gap-4 p-6 border-[1px] rounded-lg'>
      <div className="h-64 w-full">
        <img src={img} alt='hero' className="h-full w-full bg-contain" />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
        <p className='text-sm font-medium text-zinc-400'>{text}</p>
      </div>
      <div className='mt-auto'>
        {href &&
          <Link href={href} target="_blank">
            <Button >
              Cek detail
            </Button>
          </Link>
        }
      </div>
    </div>
  )
}



const dataCard = [
  {
    img: '/images/portfolio.jpg',
    title: 'Portfolio',
    text: 'The website you are looking at 👀',
    href: 'https://github.com/AlwiRifa/next-portfolio.git'
  },
  {
    img: '/images/hjk.jpg',
    title: 'HJK Jaya Abadi',
    href: 'https://hjkjayaabadi.vercel.app/'
  },
  {
    img: '/images/wika.jpg',
    title: 'Wika Perdana',
  },
  {
    img: '/images/airbnb.jpg',
    title: 'Airbnb Clone',
    href: 'https://next13-airbnb-clone-ashy.vercel.app/'
  },
  {
    img: '/images/netflix.jpg',
    title: 'Netflix Clone',
    href: 'https://next-netflix-clone-alwi.vercel.app/auth'
  },
  {
    img: '/images/covid.jpg',
    title: 'Global Covid Dashboard',
    href: 'https://public.tableau.com/app/profile/alwi.rifa/viz/COVID-19Cases_16403644556130/Dashboard2'
  },
  {
    img: '/images/grams.jpg',
    title: 'KAI GRAMS',
  },
  {
    img: '/images/genset.jpg',
    title: 'Genset Analysis',
  },
  {
    img: '/images/movie.jpg',
    title: 'Scarpping web',
  },

];



export const Project = () => {

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="py-12" id="project">

      <Container>
        <div className='p-6 flex flex-col items-center justify-center text-center gap-4 '>
          <h1 className='text-2xl sm:text-4xl font-semibold tracking-tight'>Projects</h1>
          <p className='text-sm sm:text-base max-w-4xl text-zinc-400'>
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
          {dataCard.map((data, index) => (showAll || index < 3) && (
            <Card
              img={data.img}
              key={index}
              title={data.title}
              text={data.text}
              href={data.href}
            />
          ))}
        </div>
        {!showAll ? (
          <div className='flex justify-center'>
            <Button variant='outline'
              onClick={toggleShowAll}
            >
              Show More
            </Button>
          </div>
        ) : (
          <div className='flex justify-center'>
            <Button variant='destructive'
              onClick={toggleShowAll}
            >
              Show Less
            </Button>
          </div>
        )}
      </Container>
    </div>
  )
}