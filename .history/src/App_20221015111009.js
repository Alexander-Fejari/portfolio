import './App.scss';
import { Landing, Navbar } from './components/index';

function App() {
  const gsapRootLevel = useRef
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
