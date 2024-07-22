import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Landpage from './component/Landpage';
// import Home from './pages/home';
// import About from './pages/about';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar />
    <Landpage />
   <Footer />
     {/* <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
     </Routes>
     </BrowserRouter> */}
    </div>
  );
}

export default App;
