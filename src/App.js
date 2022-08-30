import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  return (
    <>
      <Header />  
      <ItemListContainer
        saludo="Te damos la bienvenida a Tienda Tiggy "/>
      <ItemCount />
      <Footer />  
        
    </>

);

};

export default App;
