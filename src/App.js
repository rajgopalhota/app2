import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Home from "./components/Home";
import Ordersummary from './components/Ordersummary';
import Nomatch from './components/Nomatch';
function App() {
    
    return (
        <>
        <section></section>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='order' element={<Ordersummary/>}/>
            <Route path='*' element={<Nomatch/>}/>
        </Routes>
        </>
    );
}
export default App;