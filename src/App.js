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
import MinistryDetail from "./pages/MensministryDetail";
import EventDets from "./pages/eventDetail";
import Outreach from "./outreach";
import General from "./pages/generalPage";
import Gallery from "./gallery";
import WomensDetails from "./pages/WomensDetails";
import SeniorDetails from "./pages/SeniorMinsitry";
import SundaySchool from "./pages/SundaySchool";
import Nightshift from "./pages/NightShit";

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
          <Route exact path='/ministry/mens' element={<MinistryDetail />} />
          <Route exact path='/ministry/womens' element={<WomensDetails />} />
          <Route exact path='/ministry/senior' element={<SeniorDetails />} />
          <Route exact path='/ministry/sundayschool' element={<SundaySchool />} />
          <Route exact path='/ministry/nightshift' element={<Nightshift />} />

          <Route exact path='/eventDetail' element={<EventDets />} />

          <Route exact path='/general' element={<General />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
