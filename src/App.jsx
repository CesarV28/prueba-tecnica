import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

import 'normalize.css'
import './App.css'

function App() {
  
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  )
}

export default App
