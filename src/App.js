
import './App.css';
import Navbar from './Compoenent/Navbar/Navbar';
import Footer from './Compoenent/Footer/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
    </Router>
    <Footer/>
    </>
  );

}

export default App;
