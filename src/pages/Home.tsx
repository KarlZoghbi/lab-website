import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { CoursesCarousel } from "@/components/CoursesCarousel";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <CoursesCarousel />
    </>
  );
}
