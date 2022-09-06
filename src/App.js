import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
      <Header />  
      <ItemListContainer
        saludo="Te damos la bienvenida a Tienda Tiggy "/>
      <ItemDetailContainer />
      <ItemCount stock={10}/>
      <Footer />  
        
    </>

);

};

export default App;
