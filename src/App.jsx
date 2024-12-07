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
import {ObraProvider} from "./context/ObraContext.jsx";
import ReportesPage from "./pages/reportes/ReportesPage.jsx";
import ReporteFormPage from "./pages/reportes/ReporteFormPage.jsx";

function App() {
    return (
        <AuthProvider>
            <ObraProvider>
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

                            <Route path='/ver-reportes' element={<Layout>    <ReportesPage/>    </Layout>}/>
                            <Route path='/crear-reportes' element={<Layout>    <ReporteFormPage/>    </Layout>}/>
                            <Route path='/crear-obras' element={<Layout>    <ObrasFormPage/>    </Layout>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ObraProvider>
        </AuthProvider>
    )
}

export default App
  