import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Header/header';
import './App.css';
import Home from "./home";
import Footer from "./Footer/footer";
import About from "./about";
import Ministries from "./ministries";
import Contact from "./contact";
import Events from "./events";
import OutreachDetail from "./pages/outreach_detail";
import MinistryDetail from "./pages/ministryDetail";
import EventDets from "./pages/eventDetail";
import Outreach from "./outreach";
import General from "./pages/generalPage";
import Gallery from "./gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/ministries' element={<Ministries />} />
          <Route exact path='/outreach' element={<Outreach />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/pages/outreach_detail' element={<OutreachDetail />} />
          <Route exact path='/ministryDetail' element={<MinistryDetail />} />
          <Route exact path='/eventDetail' element={<EventDets />} />

          <Route exact path='/general' element={<General />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
