import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Framework from './pages/Framework'
import About from './pages/About'
import Services from './pages/Services'
import AICreativeSystem from './pages/case-studies/AICreativeSystem'
import VetChain from './pages/case-studies/VetChain'
import IncrementalityHealth from './pages/case-studies/IncrementalityHealth'
import ImmersiveExperiences from './pages/case-studies/ImmersiveExperiences'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/ai-creative-system" element={<AICreativeSystem />} />
          <Route path="/work/vet-chain" element={<VetChain />} />
          <Route path="/work/incrementality-health" element={<IncrementalityHealth />} />
          <Route path="/work/immersive-experiences" element={<ImmersiveExperiences />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
