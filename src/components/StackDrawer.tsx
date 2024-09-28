"use client";
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { links } from "@/constants";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { ReactSVG } from 'react-svg'
import { Button } from "./ui/button";

const StackDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [kapcsolatOpen, setIsKapcsolatOpen] = useState(false);

    return (
        <Drawer open={isOpen} modal={false} direction="left" dismissible={false}>
            <DrawerTrigger>
                {isOpen
                    ? <IoMdClose onClick={() => setIsOpen(false)} className="mx-4 h-full w-auto text-[3vh]" />
                    : <GiHamburgerMenu onClick={() => setIsOpen(true)} className="mx-4 h-full w-auto text-[3vh]" />}

            </DrawerTrigger>

            <DialogDescription className="hidden" />
            <DrawerContent className="text-[#797979] border-0 lg:border-r border-black border-solid yellowToGreenGradient">
                <ScrollArea>
                    <input type="search" className="w-full mt-2 bg-transparent border-b border-black py-2 px-4 text-lg" placeholder="Keresés" />
                    {links.map((link, i) => {
                        return <MobileLink key={i} href={link.href}>{link.title}</MobileLink>
                    })}

                    <Button variant={"link"} onClick={() => setIsKapcsolatOpen(!kapcsolatOpen)} className="block w-full py-3 text-[6vw] lg:text-[1vw] text-center lg:text-left lg:p-5 bg-transparent relative cursor-pointer">
                        Kapcsolat
                    </Button>
                    <p className={`block w-full font-black py-3 text-[6vw] lg:text-[1vw] text-center lg:text-left lg:p-5 select-text ` + (kapcsolatOpen ? "" : "hidden")} >
                        team@walletone.eu
                    </p>

                </ScrollArea>
                <ReactSVG src="/walletone.svg" className="absolute inset-x-20 bottom-20" />
            </DrawerContent>
        </Drawer>
    )
}

export default StackDrawer;

const MobileLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <a href={href} className="block w-full py-3 text-[6vw] lg:text-[1vw] text-center lg:text-left lg:p-5 hover:bg-black hover:bg-opacity-20">{children}</a>
    )
}