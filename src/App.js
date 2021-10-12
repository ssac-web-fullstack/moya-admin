import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Chat from './pages/Chat';
import Board from './pages/Board';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
