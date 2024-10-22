import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  let  v= 3456;
  return (
    <div className="App">
      <Header/>
     <Nav/>
      <MainContent/>
      <Footer/>

    </div>
  );
}

export default App;
