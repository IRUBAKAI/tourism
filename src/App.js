import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Hort from './components/Hort'
import Oleshko from './components/Oleshko';
import Goverla from './components/Goverla';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/hort" element={<Hort/>}/>
          <Route exact path="/oleshko" element={<Oleshko/>}/>
          <Route exact path="/goverla" element={<Goverla/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
