import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import CreateArticlePage from './pages/CreateArticlePage';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/CreateArticle" element={<CreateArticlePage></CreateArticlePage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
