import logo from './logo.svg';
import './App.css';
import Registration from './pages/Auth/registration';
import Singin from './pages/Auth/singin';
import CustomRouter from './routes';

function App() {
  return (
    <div className="App">
       <CustomRouter></CustomRouter>
    </div>
  );
}

export default App;
