import React from "react";
import HeroSubtitle from "@/components/HeroSubtitle";
import HeroTitle from "@/components/HeroTitle";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is batter way <br /> to build products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development. <br />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtitle>
          <img src="../img/Hero.webp" alt="Hero" />
        </Hero>
      </Container>
    </div>
  );
}
