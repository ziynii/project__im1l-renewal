import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import data, { IMenu } from './data';
import Home from './routes/Home';
import Menu from './routes/Menu';

function App() {
  const [menu, setMenu] = useState<IMenu[]>(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
