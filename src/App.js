import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Home from "./components/Home";
import Ordersummary from './components/Ordersummary';
import Nomatch from './components/Nomatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Profile from './components/Profile';
import Login from './components/Login';
import { AuthProvider } from './components/auth';
import RequireAuth from './components/RequireAuth';
function App() {

    return (
        <>
            
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='products' element={<Products />}>
                        <Route path='featured' element={<FeaturedProducts />}></Route>
                        <Route path='new' element={<NewProducts />}></Route>
                    </Route>
                    <Route path='order' element={<Ordersummary />} />
                    <Route path='users' element={<Users />} >
                        <Route path=":uid" element={<UserDetails />} />
                    </Route>
                    <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<Nomatch />} />
                </Routes>
            </AuthProvider>
        </>
    );
}
export default App;