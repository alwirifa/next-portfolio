'use client'

import { Container } from "./Container";

function About({ }) {

  return (
    <div id="about" className="pt-32 pb-64">
      <div className='p-6 flex flex-col items-center justify-center text-center gap-4 '>
        <h1 className='text-2xl sm:text-4xl font-semibold tracking-tight'>About</h1>
        <p className='text-sm sm:text-base max-w-4xl text-zinc-400'>
         Summary of me
        </p>
      </div>
      <Container>
        <div className="flex gap-12 py-6">

          <img
            src='/images/alwiAbout.jpg'
            alt="alwi"
            className="hidden md:block rounded-xl xl:w-[600px] w-[500px] shadow-xl"
          />
          <div className="flex flex-col sm:gap-2 gap-1 w-full">
            <h2 className="sm:text-2xl text-base font-semibold">Hi there 👋, my name is Alwi</h2>
            <p className="sm:text-lg text-xs text-black dark:text-white text-justify sm:leading-normal leading-loose mt-4">
              I am a Full-Stack developer based in Bandung, Indonesia. I am an
              undergraduate student of Electrical Engineering at Indonesia
              University of Education, and my journey in web development began
              during my first year of college in 2019. I am deeply passionate
              about creating beautiful, functional, and user-friendly websites.
              I constantly challenge myself to learn and grow as a developer.
              Additionally, I enjoy building full-stack clones and working on
              side projects.
            </p>
            <div className="mt-6">
              <a href='https://drive.google.com/file/d/1LvLhyQEJC63RXyImHTRDW37B0ScvDo-M/view?usp=drive_link' className=" rounded-md px-4 py-2 font-medium text-sm bg-sky-500  hover:bg-sky-400  dark:bg-sky-500  dark:hover:bg-sky-400 text-white cursor-pointer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
