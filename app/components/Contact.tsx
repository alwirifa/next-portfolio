'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Container } from "./Container"

export const Contact = () => {
  return (
    <Container>
      <div id="contact" className="w-full flex flex-col gap-6 py-24 ">
        

        <img src="/images/mochi-peach.gif" className="h-[300px] w-[300px]" />
        
        <div className="w-full max-w-xl flex flex-col">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">Get in Touch!</h3>
            <p className="text-zinc-500 text-sm ">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>
          </div>

          <form className="flex flex-col gap-4 mt-6">
            <div className="grid items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input type="email" id="email" placeholder="Ex:John Doe" />
            </div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Ex:mangwaw@gmail.com" />
            </div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="email">Message</Label>
              <Textarea placeholder="Type your message here." />
            </div>
            <div className="flex justify-end py-6 pb-0">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}