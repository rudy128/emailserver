import React from 'react'
import {Accordion, AccordionItem, AccordionContent, AccordionTrigger} from './ui/accordion'
import { Button } from './ui/button'
import { FlagTriangleLeft, Mails, MailSearch, Megaphone, PenBox } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='w-1/6 py-6 space-y-8'>
        <Button className='w-5/6 text-lg flex justify-evenly rounded-full mx-4 border border-white/40 bg-transparent text-white hover:bg-white/20'><PenBox size={16}/>Compose</Button>
        <Accordion type='multiple'>
            <AccordionItem value='Mails'>
            <AccordionTrigger className='p-4 px-8 data-[state=open]:bg-white/20'><div><Mails /></div>Mails</AccordionTrigger>
            <Link href={''}><AccordionContent>Yes</AccordionContent></Link>
            </AccordionItem>
        </Accordion>
        <Accordion type='multiple'>
            <AccordionItem value='Campaigns'>
            <AccordionTrigger className='p-4 px-8 data-[state=open]:bg-white/20'><div><Megaphone /></div>Campaigns</AccordionTrigger>
            <Link href={''}><AccordionContent className='p-4 flex justify-evenly hover:bg-white/15'><FlagTriangleLeft />All Capaigns</AccordionContent></Link>
            <Link href={''}><AccordionContent className='p-4 flex justify-evenly hover:bg-white/15'><MailSearch />Email templates</AccordionContent></Link>
            {/* <Link href={''}><AccordionContent className='p-4 flex justify-evenly hover:bg-white/15'>Reports</AccordionContent></Link> */}
            </AccordionItem>
        </Accordion>

    </div>
  )
}

export default SideBar