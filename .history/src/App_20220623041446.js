import Home from "./pages/Home";
import dapp from "./pages/dapp";
function App() {
  return (
    <Router>
    <div>
      {/* <Home />       */}
      <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
    </div>
    </Router>
  );
}

export default App;
