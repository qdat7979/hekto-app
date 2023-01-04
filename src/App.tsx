import { GlobalStyle } from './GlobalStyle/GlobalStyles'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import AppHeader from './components/common/Header/Header';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import Pages from './pages/Pages/Pages';
import Shop from './pages/Shop/Shop';
import Products from './pages/Products/Products';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shopping from './pages/Shopping/Shopping';
import CheckOut from './pages/CheckOut/CheckOut';
import OrderComplete from './pages/Order/OrderComplete';
import NotFound from './pages/NotFound/NotFound';

const ROUTER = {
  HOME: '/',
  LOGIN: '/'
}

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <BrowserRouter>
          {/* Header */}
          {/* <AppHeader/> */}

          {/* Content */}
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/pages' element={<Pages/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/blog' element={<Blogs/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/detail' element={<ProductDetail/>} />
            <Route path='/cart' element={<Shopping/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            <Route path='/ordered' element={<OrderComplete/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/products/:id' element={<ProductDetail/>}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </div>
  )
}

export default App
