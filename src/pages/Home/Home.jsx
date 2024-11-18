import React from 'react'
import './home.scss'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const allowedUserAgents = [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    ];
    
    const userAgent = navigator.userAgent;
    
    if (!allowedUserAgents.includes(userAgent)) {
      alert("Bu cihazdan giriş yapılmasına izin verilmiyor.");
      window.location.href = "/"; // Ana sayfaya yönlendir
    }
    
  return (
    <div className='home'>
      <h1>Quizzler</h1>
      <button onClick={() => navigate('/quiz')}>Let’s start the quiz <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
    </div>
  )
}

export default Home
