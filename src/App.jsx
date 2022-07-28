
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import PaisCard from './components/PaisCard'

function App() {
  
  
  
  return (
    <div className="App">
      <PaisCard namePais={'colombia'}/>
      <PaisCard namePais={'peru'}/>
      <PaisCard namePais={'mexico'}/>
      <PaisCard namePais={'dominican'}/>
      <PaisCard namePais={'ecuador'}/>
    </div>
  )
}

export default App
