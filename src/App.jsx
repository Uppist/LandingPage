/** @format */

import { HashRouter, Routes, Route } from "react-router-dom";
import Website from "./components/Website";
import Privacy from "./components/Privacy";

export default function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Website />} />
          <Route path='/Privacy' element={<Privacy />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
