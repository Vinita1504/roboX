"use client";

import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6">
      <div className="flex items-start justify-between">
        {/* Left: Brand Name */}
        <div className="flex  flex-col items-start justify-start gap-2">
          <h1 className="text-6xl font-display md:text-8xl lg:text-[11em]  text-foreground tracking-normal">
            ROBOX
          </h1>
          <p className="text-lg md:text-xl tracking-tight leading-1 text-muted-foreground">Where Innovation Meets Engineering & Education</p>
        </div>

        {/* Right: Status, Time, CTA, and Menu */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* Available Status */}
          <div className="hidden md:flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs md:text-sm text-foreground">
                Available for project
              </span>
            </div>
            <span className="text-xs text-muted-foreground ml-4">
              EARLY FEB 2025
            </span>
          </div>

          {/* Time */}
          <div className="hidden lg:flex flex-col items-start">
            <span className="text-xs md:text-sm text-foreground">1:44 AM</span>
            <span className="text-xs text-muted-foreground">(GMT+7)</span>
          </div>

          {/* Let's Talk Button */}
          <button className="px-4 py-2 border border-muted  rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors text-sm  font-medium">
            LET&apos;S TALK
          </button>

          {/* Hamburger Menu */}
          <button
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
