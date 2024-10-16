import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Test from './components/Test';
import AddUsers from './components/AddUsers';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<AddUsers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
