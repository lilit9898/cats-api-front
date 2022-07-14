import './App.css';
import CatAppContext from './context/CatAppContext';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryImages from './components/CategoryImages';

function App() {
  return (
    <BrowserRouter>
      <CatAppContext>
        <Routes>
          <Route index element={<Home />} />
          <Route path=':catId' element={<CategoryImages />} />
        </Routes>
      </CatAppContext>
    </BrowserRouter>
  );
}

export default App;
