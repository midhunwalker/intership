import React from 'react'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        paddingLeft: '500px'
      }}
    >
      <Welcome name="Midhun" style={{ color: 'green'}}/>
      <Welcome name="React Developer" />
      <Welcome name="From Palakkad" />

      <hr style={{ width: '100%', margin: '30px 0' }} />

      <Counter />

      <hr style={{ width: '100%', margin: '30px 0' }} />

      <ToDoList />
    </div>
  )
}

export default App
