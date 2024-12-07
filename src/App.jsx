import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {AuthProvider} from './context/AuthContext'
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import ProductsFormPage from './pages/ProductsFormPage';
import ProtectedRoute from './ProtectedRoute';
import Layout from "./layouts/Layout.jsx";

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
                    <Route path='/login' element={<Layout><LoginPage/></Layout>}/>
                    <Route path='/register' element={<Layout><RegisterPage/></Layout>}/>

                    {/*Selecion de rutas  protegidas */}
                    <Route element={<ProtectedRoute/>}>
                        <Route path='/profile' element={<Layout><ProfilePage/></Layout>}/>
                        <Route path='/products' element={<Layout><ProductsPage/></Layout>}/>
                        <Route path='/products-add' element={<Layout><ProductsFormPage/></Layout>}/>
                        <Route path='/products/:id' element={<Layout><ProductsFormPage/></Layout>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
  