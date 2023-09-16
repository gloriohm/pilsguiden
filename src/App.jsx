import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header className=' bg-amber-200 py-3 mb-8'>
        <div className='m-auto max-w-xl'>
          <NavBar />
        </div>
      </header>
      <main className='px-1 m-auto max-w-xl'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<About />} />
        </Routes>
      </main>
      <div className='px-1 text-sm my-16 m-auto max-w-xl'>
        <Footer />
      </div>
    </>
  )
}

export default App
