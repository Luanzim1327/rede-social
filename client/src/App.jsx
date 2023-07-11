import Login from './pages/auth/login';
import SignUp from './pages/auth/SignUp'
import Home from './pages/Home';
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>      
  )
}

export default App
