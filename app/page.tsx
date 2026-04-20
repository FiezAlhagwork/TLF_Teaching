import { About } from "@/components/sections/About"
import { Courses } from "@/components/sections/Courses"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Courses/>
    </main>
  )
}
