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
function App() {

    return (
        <>
            <section></section>
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
                    <Route path=":uid" element = {<UserDetails />} />
                </Route>
                <Route path='*' element={<Nomatch />} />
            </Routes>
        </>
    );
}
export default App;