import Header from "./components/header";
import Hero from "./components/hero.jsx";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./components/contact.jsx"
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
