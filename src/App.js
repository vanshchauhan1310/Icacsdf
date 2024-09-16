
import './App.css';
import Navbar from './Compoenent/Navbar/Navbar';
import Footer from './Compoenent/Footer/Footer';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import Callforpaper from './Pages/Callforpaper';
import AboutPage from './Pages/AboutPage';
import ReviewPage from './Pages/ReviewPage';
import ContactUs from './Pages/ContactUs';
import Registration from './Pages/Registration';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/committee" element={<TeamPage/>}/>
          <Route path="/callforpaper" element={<Callforpaper/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/review" element={<ReviewPage/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
    </Router>
    <Footer/>
    </>
  );

}

export default App;
