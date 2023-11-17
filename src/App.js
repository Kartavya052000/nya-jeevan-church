import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Header/header';
import './App.css';
import Home from "./home";
import Footer from "./Footer/footer";
import About from "./about";
import Ministries from "./ministries";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/ministries' element={<Ministries/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
