import Features from './components/Features';
import EntryPoint from './screens/EntryPoint';
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './App.scss'

function App() {

  const [load, setload] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setload(false)
    }, 2500);

    return () => {

    }
  }, [])

  if (load) {
    return (
      <div className='flex justify-center bg-gray-800 items-center h-screen self-center'>
        <div className="flex h-8 w-8 absolute ">
          <span className="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-blue-800 opacity-75">
          </span><span className="relative rounded-full h-8 w-8 -top-4 -left-4 bg-blue-800">
          </span></div>
        <div className='text-center mt-20 text-white text-4xl'>
          <Typewriter
            words={['Loading']}
            loop={true}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className='bg-gray-900 '>
        <div className="max-w-6xl mx-auto ">
          <div >

            <NavBar />
            <EntryPoint />
            <Features />
            <Footer />

          </div>

        </div>
      </div>
    )
  }
}

export default App
