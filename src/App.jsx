import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'
import {AuthProvider} from './context/AuthContext'
import HomePage from './pages/HomePage';
import ProfilePage from './pages/auth/ProfilePage.jsx';
import ProtectedRoute from './ProtectedRoute';
import Layout from "./layouts/navbar/Layout.jsx";
import ObrasFormPage from "./pages/obras/ObrasFormPage.jsx";
import ObrasPage from "./pages/obras/ObrasPage.jsx";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}>
                <Routes>
                    <Route path='/' element={<Layout>
                        <HomePage/>
                    </Layout>}/>
                    <Route path='/login' element={<Layout>  <LoginPage/>    </Layout>}/>
                    <Route path='/register' element={<Layout>   <RegisterPage/> </Layout>}/>
                    <Route path='/ver-obras' element={<Layout>  <ObrasPage/>    </Layout>}/>

                    {/*Selecion de rutas  protegidas */}
                    <Route element={<ProtectedRoute/>}>
                        <Route path='/profile' element={<Layout>    <ProfilePage/>  </Layout>}/>

                        <Route path='/crear-obras' element={<Layout>    <ObrasFormPage/>    </Layout>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
  