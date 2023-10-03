'use client'

import Image from "next/image";
import { Container } from "./Container";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


const skills = [
  "Javascript ES6+",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express",
  "Mongodb",
  "Prisma",
  "Python",
  "Java",
  "HTML & CSS",
];

function About({ }) {

  return (
    <div id="about" className="pt-32 pb-64">
      <Container>
        <div className='flex flex-col space-y-1.5 '>
          <h1 className='text-4xl font-semibold tracking-tight'>/About</h1>
          <p className='text-lg max-w-4xl text-zinc-400'>
            Summary of me
          </p>
        </div>
        <div className="flex gap-16 py-6">

          <div className="flex flex-col gap-4 max-w-xl text-justify">
            <p>
              I am a <span className="font-semibold">Software Engineer</span> based in Bandung,
              undergraduate student of Electrical Engineering at <a href="https://www.upi.edu/" className="font-semibold text-sky-500">Indonesia
                University of Education</a>, and my journey in web development began
              during my first year of college in 2019. I am deeply passionate
              about creating beautiful, functional, and user-friendly websites.
            </p>
            <p>
              Here are some technologies I have been working with:
            </p>
            <div className="grid grid-cols-2 max-w-sm">
              {skills.map((data) => (
                <div className="flex items-center gap-2">
                  <span className="text-sky-500">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                  {data}
                </div>
              ))}
            </div>
            <p>
              Outside of work, I amm interested in following the developments of science. I also play a lot of video games. And make youtube videos.
            </p>
            <div>
              <a href='https://drive.google.com/file/d/1LvLhyQEJC63RXyImHTRDW37B0ScvDo-M/view?usp=drive_link' className=" rounded-md px-4 py-2 font-medium text-sm bg-sky-500  hover:bg-sky-400  dark:bg-sky-500  dark:hover:bg-sky-400 text-white cursor-pointer">
                Resume
              </a>
            </div>
          </div>
          <img
            src='/images/alwiAbout.jpg'
            alt="alwi"
            className="h-[350px] w-[300px] rounded-lg"
          />
        </div>
      </Container>
    </div>
  );
}

export default About;
