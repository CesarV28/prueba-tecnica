import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Home } from '../pages/home/Home'

export const AppRouter = () => {
  return (
    
    <Routes>
        
        <Route path='/' element={ <MainLayout/>} >
            <Route index element={ <Home/>} />
        </Route>

    </Routes>

  )
}
