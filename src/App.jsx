import {
  createBrowserRouter,
  Outlet,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar.jsx";
import Footer from "./Componets/Footer/Footer.jsx";
import Cart from "./cart/Cart.jsx";
import Sign from "./Componets/Sign";
import Home from "./Pages/Home";
import { ProdcutsData } from "./api/Api.jsx";


const Layout =()=>{
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}loader={ProdcutsData} ></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
        <Route path="/sign" element={<Sign/>}></Route>
      </Route>

    )

  );
  return (
  <div>
    <RouterProvider router={router} />
    </div>
    
  )
};

export default App
