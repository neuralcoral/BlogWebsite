import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreatePost from './components/CreatePost/CreatePost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={ <Home/> }
            />
            <Route
              path="/introitus"
              element= { <Login/> }
            />
            <Route
              path="/createPost"
              element= { <CreatePost/>}
            />

          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
