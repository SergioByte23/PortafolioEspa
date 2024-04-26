
import './App.css'
import Nav from './assets/components/Nav'
import Header from './assets/components/Header.jsx'
import Main from './assets/components/Main.jsx'
import Footer from './assets/components/Footer.jsx'
import { useState } from 'react'

function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const [englishMode, setEnglishMode] = useState(false)

  return (
    <>
      <Nav 
        darkMode = {darkMode}
        setDarkMode = {setDarkMode}
        englishMode ={englishMode}
        setEnglishMode ={setEnglishMode}
        />
      <Header
      darkMode = {darkMode}
      englishMode ={englishMode}
      >        
      </Header>
      <Main 
      darkMode = {darkMode}
      englishMode ={englishMode}>     
      </Main>
      <Footer 
      darkMode = {darkMode}
      englishMode ={englishMode}
      ></Footer>
      
    </>
  )
}

export default App
