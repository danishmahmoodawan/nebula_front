import Home from "./pages/Home";
import dapp from "./pages/dapp";
function App() {
  return (
    <Router>
        </Router>
    <div>
      {/* <Home />       */}
      <Route exact path='/' exact element={<Home />} />
        <Route path='/dapp' element={<dapp/>} />
    </div>
  
  );
}

export default App;
