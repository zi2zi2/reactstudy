import logo from './logo.svg';
import './App.css';
import ClickTest from './ClickTest.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    
    <div className="App">
      <Header/>
      <ClickTest value={1}/>
      <Footer/>
    </div>
  );
}

export default App;
