import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Home, About, Portal, Tableu, Services, Blog, Contact } from '../pages/'

export const AppRouter = () => {

  

  return (
    
    <Routes>
        
        <Route path='/' element={ <MainLayout/>} >
            <Route index element={ <Home/>} />
            <Route path='/nosotros' element={<About/>}/>
            <Route path='/servicios' element={<Services/>}/>
            <Route path='/tableu' element={<Tableu/>}/>
            <Route path='/portal' element={<Portal/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contacto' element={<Contact/>}/>
        </Route>

    </Routes>

  )
}
