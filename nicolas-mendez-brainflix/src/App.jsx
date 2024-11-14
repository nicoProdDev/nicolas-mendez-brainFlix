import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from "./pages/landingPage/landingPage";
import './App.scss';
import VideoUpload from './pages/videoUpload/videoUpload';




function App() {  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={
          <Landing  
          />
        } />
        <Route path="/videos/:id" element={
          <Landing 
          />
        } />
        <Route path='/upload'
                element={<VideoUpload />} 
        />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

