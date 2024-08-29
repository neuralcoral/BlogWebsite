import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreatePost from './components/CreatePost/CreatePost';
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
      <header className="App-header">
      </header>
        <NavBar/> 
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/createPost"
                element={<CreatePost />}
              />
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
