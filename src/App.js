import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navbar } from "./components/Navbar/Navbar"
import { AppRouting } from './AppRouting';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <>
  <AppRouting/>
  </>;
}

export default App;
