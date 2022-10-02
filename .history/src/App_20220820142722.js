import './App.scss';
import { Landing, Navbar } from './components/index';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main id='pro'>
        <Landing/>
      </main>
    </div>
  );
}

export default App;
