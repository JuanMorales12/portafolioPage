import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import About from '@components/About'
import Portfolio from '@components/Portfolio'
import Contact from '@components/Contact'
import Error404 from '@components/Error404'

const App = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
