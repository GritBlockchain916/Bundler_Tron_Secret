import logo from './logo.svg';
import './App.css';
import SunSwap from './sunswap';

function App() {
  return (
    <div className="App" style={{ height: '100vh', width : '100vw' }}>
      <iframe
        src="https://trondao.org/"
        title="TRON Network"
        style={{
          position : 'absolute',
          top : '0px',
          left : '0px',
          width: 'calc(100vw - 0px)',
          height: '100vh',
          border: 'none',
          overflowX : 'hidden',
          // overflow: 'auto', // Ensure no scrollbars are shown
        }}
      ></iframe>
    </div>
  );
}

export default App;