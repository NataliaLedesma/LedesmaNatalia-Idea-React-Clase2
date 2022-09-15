import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './content/CartContext';


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />  
        <Main />
        <Footer /> 
      </BrowserRouter>
    </CartProvider>

);

};

export default App;
