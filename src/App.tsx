import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AdminHeader from './components/AdminHeader/AdminHeader';

function App() {
  const [isHidden, setIsHidden] = useState(false);
  function toggleShow() {
    setIsHidden(!isHidden);
  }

  return (
    <>
      <header className="App-header"></header>
      <BrowserRouter>
        <AdminHeader />
        <div className="app">
          <div className={`navbar ${isHidden ? 'hidden' : ''}`}>
            <NavBar />
          </div>
          <div className="content">
            <Content />
          </div>
          <div className="toggle-show" onClick={toggleShow}>
            🧠
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
