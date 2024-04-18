
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCatagory category="mens"/>}/>
          <Route path='/womens' element={<ShopCatagory category="womens"/>}/>
          <Route path='/kids' element={<ShopCatagory category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
       </Route>   
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSingup/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;