import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navbar } from "./components/Navbar/Navbar"
import { ItemList } from './components/ItemList/ItemList';
import { ItemDetail } from './components/ItemDetail/ItemDetail';

function App() {
  return <>
  <Navbar />
  <ItemDetail />
  </>;
}

export default App;
