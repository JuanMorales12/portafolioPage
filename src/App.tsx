import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import Services from '@components/Services'
import Portfolio from '@components/Portfolio'
import Testimonials from '@components/Testimonials'
import Contact from '@components/Contact'

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
