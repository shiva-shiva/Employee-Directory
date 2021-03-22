
import Navbar from './components/Navbar';
import MainContainer from './pages/MainContainer';
import Wrapper from './components/Wrapper';

import './App.css';
function App() {
  return (
    <div className="App">
      <Wrapper>
      <Navbar/>
      <MainContainer/>
      </Wrapper>
    </div>
  );
}

export default App;
