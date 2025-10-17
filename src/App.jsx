import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Project from "./components/project"
import LoadingScreen from "./components/LoadingScreen"
import ScrollToTop from "./components/ScrollToTop"
import ParticleBackground from "./components/ParticleBackground"
import DownloadCV from "./components/DownloadCV"
import { useState, useEffect } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <ParticleBackground />
      <Navbar/>
      <Hero/>
      <About />
      <Experience/>
      <DownloadCV />
      <Project />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default App
