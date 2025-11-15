// import { useState } from 'react'
import './App.css'
import { Content } from './components/content'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
