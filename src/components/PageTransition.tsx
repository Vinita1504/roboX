"use client";

import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';

const PageTransition = ({children}: {children: React.ReactNode}) => {
  const pathName = usePathname();

  useGSAP(() => {
    if (typeof window === 'undefined') return;

    const loader = document.getElementById('page-loader');
    if (!loader) return;
    gsap.set(loader, { opacity: 1 });
    gsap.to(loader, { y: "-100%" ,duration: 1, ease: 'power4.inOut' , delay: 2,});
  }, {dependencies: [pathName]});

  return (
    <div>
      {children}
    </div>
  )
}

export default PageTransition