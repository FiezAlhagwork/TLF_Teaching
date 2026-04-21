import { About } from "@/components/sections/About"
import { Courses } from "@/components/sections/Courses"
import { Hero } from "@/components/sections/hero"
import { Results } from "@/components/sections/Results"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Results />
      <Courses />
    </main>
  )
}
