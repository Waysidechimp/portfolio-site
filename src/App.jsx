import { useState } from 'react'
import StartPage from './components/StartPage'

import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Start')

const SetPage = () => {
  if(currentPage === 'Start') return <StartPage />
}

  return (
    <>
      {SetPage()}
    </>
  )
}

export default App
