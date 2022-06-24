import Home from "./pages/Home";
import dapp from "./pages/dapp";
function App() {
  return (
    <Router>
 <Route exact path='/' exact element={<Home />} />
        <Route path='/dapp' element={<dapp/>} />
        </Router>
    <div>
      { <Home />       }
     
    </div>
  
  );
}

export default App;
