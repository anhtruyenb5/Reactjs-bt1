import logo from './logo.svg';
import './App.css';
import Header from './myapp/Header';
import Banner from './myapp/Banner';
import Item from './myapp/Item';
import Footer from './myapp/Footer';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Banner />
        <Item />
      </div>
      <Footer />
    </div>
  );
}

export default App;
