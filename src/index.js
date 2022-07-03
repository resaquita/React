import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDz5WqepgCm2CiPtxEntu_35MgRus4RCCo",
  authDomain: "coderhouse-react-fb210.firebaseapp.com",
  projectId: "coderhouse-react-fb210",
  storageBucket: "coderhouse-react-fb210.appspot.com",
  messagingSenderId: "942932004828",
  appId: "1:942932004828:web:ca48b92a7e6ebd6ffb0919"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

