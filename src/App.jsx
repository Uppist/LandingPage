/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./components/Website";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/LandingPage' element={<Website />} />
          <Route path='Privacy' element={<Privacy />} />
          <Route path='/LandingPage' element={<Login />} />
          <Route path='/LandingPage' element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
