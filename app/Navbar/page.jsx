"use client"

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, Phone } from "lucide-react";
import Link from "next/link";
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white font-medium">
      <Dock className="bg-[rgba(255,255,255,0.3)]">
        <DockIcon>
          <Link href="/">
            <Home />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/contact">
            <Phone />
          </Link>
        </DockIcon>
        <DockIcon className={"mx-8"}>
          <Link href="/sculpturez">
            Sculpturez
          </Link>
        </DockIcon>

        <DockIcon className={"mx-8"}>
          <Link href="/sanchariz">
            Sanchariz
          </Link>
        </DockIcon>
        <DockIcon className={"mx-8"}>
          <Link href="/techniqz">
            Techniqz
          </Link>
        </DockIcon>
      </Dock>
    </div>
  )
}

export default Navbar