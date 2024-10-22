import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import React, {useState} from 'react';
function App() {
  let  v= 3456;
  const [count, setCount]= useState(0);
  const handleIncrement= ()=> {
    setCount(count+2);
    console.log('Button Pressed');

  };
  return (
    <div className="App">
      <Header/>
     <Nav/>
      <MainContent/>
      <UserProfile names={"Andrea"} age={17} zip={'19121'}/>
      
      <div>
        <p>Button clicked: {count} times!</p>
        <button onClick={handleIncrement}>Click Me!</button>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
