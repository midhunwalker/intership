import { useState } from 'react'
import Welcome from './components/Welcome';
import './App.css'

function App() {


  return (
    <>
     <div>
      <Welcome name="Midhun" />
      <Welcome name="React Developer" />
      <Welcome name="From Palakkad" />
    </div>
    </>
  )
}

export default App
