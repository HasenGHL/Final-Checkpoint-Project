import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Link  } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = ()=>{
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </>)
}

export default App;
