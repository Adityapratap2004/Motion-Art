
import BuyNowHeader from './components/BuyNowHeader';
import Home from './components/Home';
import Footer from './components/Footer';
import initFluid from "./script";
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    initFluid();
  }, []);

  return (
    <div className="App">
      <BuyNowHeader />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
