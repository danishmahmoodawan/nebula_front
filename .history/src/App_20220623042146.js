import Home from "./pages/Home";
import dapp from "./pages/Dapp";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
function App() {
  return (
    // <div>
    //   <Home />      
    // </div>
    <Router>
  
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/Dapp' element={<Dapp/>} />
       
    </Routes>
    </Router>
  );
}

export default App;
