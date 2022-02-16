import { useSelector } from 'react-redux';
import './App.css';
import Login from './pages/login/Login';

function App() {
  const { currentUser, error } = useSelector(state => state);

  console.log(currentUser, error);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
