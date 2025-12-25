"use client"

import { useRef } from "react"
import { RevealText } from "./RevealText"

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={loaderRef}
      id="page-loader"
      className="absolute w-full h-screen z-9999 bg-[#ff4926]"
    >
      <div className="flex items-center justify-center h-full">
        <RevealText 
            field="ROBOX" 
            id="logo-text" 
            as={'h1'} 
            duration={1}
            staggerAmount={0.3}
            className="font-display max-w-xl text-6xl leading-none text-background md:text-7xl lg:text-8xl"/>
      </div>
    </div>
  )
}
