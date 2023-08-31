

import Navigation from './components/Navigation';
import Home from './components/Home';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/scrollToTop';

import Footer from './components/Footer';
import Projects from './components/Projects';


function App() {
  return (
  <>
   
      <Router>
        {/* <ScrollToTop /> */}
        <ScrollToTop />
        <Navigation />
       
        {/* <Home /> */}
        {/* <Footer /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          {/* <Route exact path="/project/:id" element={<Project />} />
          <Route exact path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </Router> 
     </>

   

  );
}

export default App;
