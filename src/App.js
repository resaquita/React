import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AppRouting } from './AppRouting';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <AppRouting/>
    </CartProvider>
  )

}

export default App;

