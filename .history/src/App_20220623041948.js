import Home from "./pages/Home";
import dapp from "./pages/dapp";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
function App() {
  return (
    // <div>
    //   <Home />      
    // </div>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/dapp' element={<dapp/>} />
       
    </Routes>
    </Router>
  );
}

export default App;
