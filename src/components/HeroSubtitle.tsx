"use client";

import React from "react";

const HeroSubtitle = ({ children }: HeroElementsProps) => {
  return (
    <div className="text-center">
      <p className="sm:text-xl md:text-1xl xl:text-2xl mb-12">{children}</p>
    </div>
  );
};

export default HeroSubtitle;
