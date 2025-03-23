"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">Elliot</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar