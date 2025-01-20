import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Collection from './components/collection/Collection';
import Cities from './components/Cities';
import Cta from './components/Cta'


function App() {
  return (
   <>
   <Navbar/>
   <Card/>
   <Collection/>
   <Cities/>
   <Cta/>
   </>
  );
}

export default App;
