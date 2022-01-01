import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import data, { IMenu } from './data';
import Home from './routes/Home';
import Menu from './routes/Menu';

function App() {
  const [menus, setMenus] = useState<IMenu[]>(data);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home menus={menus} />} />
          <Route path="/menu" element={<Menu menus={menus} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


