'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Container } from "./Container"

export const Contact = () => {
  return (
    <Container>
      <div id="contact" className="w-full flex flex-col items-center gap-6 justify-center py-24">
       
        <div className="w-full max-w-sm border-[1px] rounded-lg flex flex-col">
          <div className="flex flex-col gap-4 p-6">
            <h3 className="text-2xl font-semibold">Get in Touch!</h3>
            <p className="text-zinc-400 text-sm ">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>
          </div>
          <form className="flex flex-col gap-4 p-6 pt-0">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Message</Label>
              <Textarea placeholder="Type your message here." />
            </div>
            <div className="py-6 pb-0">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}