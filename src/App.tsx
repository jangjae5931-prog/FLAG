import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Resume />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
