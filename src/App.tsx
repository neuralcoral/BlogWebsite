import './App.css';
import Content from './components/Content/Content';
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="App-header">
      </header>
      <BrowserRouter>
        <div className='container'>
          <div className='navbar'>
            <NavBar /> 
          </div>
          <div className='content'>
            <Content />
          </div>
        </div>
          </BrowserRouter>
    </>
  );
}

export default App;
