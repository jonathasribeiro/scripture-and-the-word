import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from '@/context/AppContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { WordPage } from '@/pages/WordPage'
import { LanguagesPage } from '@/pages/LanguagesPage'
import { CanonPage } from '@/pages/CanonPage'
import { ManuscriptsPage } from '@/pages/ManuscriptsPage'
import { FathersPage } from '@/pages/FathersPage'
import { LibraryPage } from '@/pages/LibraryPage'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main" className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/word" element={<WordPage />} />
              <Route path="/languages" element={<LanguagesPage />} />
              <Route path="/canon" element={<CanonPage />} />
              <Route path="/manuscripts" element={<ManuscriptsPage />} />
              <Route path="/fathers" element={<FathersPage />} />
              <Route path="/library" element={<LibraryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
