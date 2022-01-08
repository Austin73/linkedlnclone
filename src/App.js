
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import FigmaContainer from './components/FigmaContainer';
import SideBarContainer from './components/SideBarContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div style={{position:'fixed'}}> 
      <Header />
      <NavBar />
      </div>

      <Main />
      <div style={{ display: 'flex', backgroundColor: 'lightgrey', width: '100vw', margin: 'auto' }}>

        <FigmaContainer />
        <SideBarContainer />
      </div>
    </div>
  );
}

export default App;
