import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navbar } from "./components/Navbar/Navbar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return <>
  <Navbar />
  <ItemListContainer nombreUsuario ="Usuario" />
  
  </>;
}

export default App;
