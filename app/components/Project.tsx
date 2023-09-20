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
    text: 'Proyek Y adalah proyek infrastruktur yang sedang kami kerjakan di HJK Jaya Abadi. Proyek ini mencakup pembangunan jalan raya yang penting untuk wilayah ini. Kami berkomitmen untuk menyelesaikan proyek ini dengan kualitas terbaik dan tepat waktu.',
    href: 'https://hjkjayaabadi.vercel.app/'
  },
  {
    img: '/images/wika.jpg',
    title: 'Wika Perdana',
    text: 'Proyek Z adalah salah satu proyek renovasi bangunan yang telah kami selesaikan di HJK Jaya Abadi. Kami telah mengubah bangunan tua menjadi bangunan yang modern dan fungsional sesuai dengan kebutuhan klien kami.'
  },
  {
    img: '/images/airbnb.jpg',
    title: 'Airbnb Clone',
    text: 'Proyek Z adalah salah satu proyek renovasi bangunan yang telah kami selesaikan di HJK Jaya Abadi. Kami telah mengubah bangunan tua menjadi bangunan yang modern dan fungsional sesuai dengan kebutuhan klien kami.',
    href: 'https://next13-airbnb-clone-ashy.vercel.app/'
  },
  {
    img: '/images/netflix.jpg',
    title: 'Netflix Clone',
    text: 'Proyek X adalah salah satu proyek besar yang telah kami selesaikan di HJK Jaya Abadi. Proyek ini melibatkan desain dan konstruksi fasilitas industri yang canggih untuk klien kami. Kami bangga dapat menyelesaikan proyek ini dengan sukses dan memberikan solusi yang efisien untuk klien kami.',
    href: 'https://next-netflix-clone-alwi.vercel.app/auth'
  },
  {
    img: '/images/covid.jpg',
    title: 'Global Covid Dashboard',
    text: 'Proyek Y adalah proyek infrastruktur yang sedang kami kerjakan di HJK Jaya Abadi. Proyek ini mencakup pembangunan jalan raya yang penting untuk wilayah ini. Kami berkomitmen untuk menyelesaikan proyek ini dengan kualitas terbaik dan tepat waktu.',
    href: 'https://public.tableau.com/app/profile/alwi.rifa/viz/COVID-19Cases_16403644556130/Dashboard2'
  },
  {
    img: '/images/grams.jpg',
    title: 'KAI GRAMS',
    text: 'Proyek Z adalah salah satu proyek renovasi bangunan yang telah kami selesaikan di HJK Jaya Abadi. Kami telah mengubah bangunan tua menjadi bangunan yang modern dan fungsional sesuai dengan kebutuhan klien kami.'
  },
  {
    img: '/images/genset.jpg',
    title: 'Genset Analysis',
    text: 'Proyek X adalah salah satu proyek besar yang telah kami selesaikan di HJK Jaya Abadi. Proyek ini melibatkan desain dan konstruksi fasilitas industri yang canggih untuk klien kami. Kami bangga dapat menyelesaikan proyek ini dengan sukses dan memberikan solusi yang efisien untuk klien kami.'
  },
  {
    img: '/images/movie.jpg',
    title: 'Scarpping web',
    text: 'Proyek Y adalah proyek infrastruktur yang sedang kami kerjakan di HJK Jaya Abadi. Proyek ini mencakup pembangunan jalan raya yang penting untuk wilayah ini. Kami berkomitmen untuk menyelesaikan proyek ini dengan kualitas terbaik dan tepat waktu.'
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