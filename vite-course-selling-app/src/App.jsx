import SignUp from "./Signup.jsx";
import Appbar from "./appbar.jsx";
import SignIn from "./SignIn.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      backgroundColor:"#eeeeee"
    }}>
    
    <Router><Appbar />
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>

    </Router>
    </div>
  )
}



export default App
