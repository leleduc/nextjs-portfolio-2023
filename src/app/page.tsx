import { Contact, Hero, Projects, Skills } from '@/components';

export default function Home() {
  return (
    <main className="relative w-full m-0 p-0">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
