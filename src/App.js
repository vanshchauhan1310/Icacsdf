
import './App.css';
import Navbar from './Compoenent/Navbar/Navbar';
import MasterHead from './Compoenent/MasterHead/MasterHead';
import EventDetail from './Compoenent/Event-Details/EventDetail';
import About from './Compoenent/About-Event/About';
import Objective from './Compoenent/Objective/Objective';
import ConferenceTopic from './Compoenent/ConferenceTopic/ConferenceTopic';
import Footer from './Compoenent/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <MasterHead />
    <EventDetail />
    <About />
    <Objective/>
    <ConferenceTopic/>
    <Footer/>
    </>
  );

}

export default App;
