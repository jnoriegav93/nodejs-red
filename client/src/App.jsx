import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1> }/>
          <Route path='/login' element={<LoginPage/> }/>
          <Route path='/register' element={<RegisterPage/> }/>
          <Route path='/map' element={<h1>Mapa page</h1> }/>
          <Route path='/add-poste' element={<h1>Poste nuevo</h1> }/>
          <Route path='/postes/:id' element={<h1>Detalle poste</h1> }/>
          <Route path='/profile' element={<h1>Mi Perfil</h1> }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App
//https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode 2:05:00