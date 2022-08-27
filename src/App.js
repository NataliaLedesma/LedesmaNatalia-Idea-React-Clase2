import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
      <Header />  
      <ItemListContainer
        saludo="Te damos la bienvenida a Tienda Tiggy "/>
      <Footer />  
        
    </>

);

};

export default App;
