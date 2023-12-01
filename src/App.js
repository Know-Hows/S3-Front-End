import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CreateArticlePage from './pages/CreateArticlePage';

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/ArticlePage" element={<ArticlePage></ArticlePage>}></Route>
          <Route path="/CreateArticlePage" element={<CreateArticlePage></CreateArticlePage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
