"use client";

import React from "react";

const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <div className="text-center">
      <div className="sm:text-3xl md:text-4xl xl:text-5xl my-6">{children}</div>
    </div>
  );
};

export default HeroTitle;
