import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Header/header';
import './App.css';
import Home from "./home";
import Footer from "./Footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='faq' element={<Faq />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
