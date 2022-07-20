
import './App.css';
import Homepage from './components/Homepage'
import BlogInfo from './components/BlogInfo'
import BlogDetails from './components/BlogDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/blogDetails' element={<BlogDetails/>} />
        <Route path='/createBlog' element={<BlogInfo/>} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
