import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import About from '@components/About'
import Portfolio from '@components/Portfolio'
import Contact from '@components/Contact'
import Error404 from '@components/Error404'

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
