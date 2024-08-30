/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./components/Website";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function App() {
  return (
    <div className='App'>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path='/LandingPage' element={<Website />} />
          <Route path='Privacy' element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
