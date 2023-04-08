import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"

import Home from "./component/Home"
import Buttons from "./component/Buttons"
import CrashCourseNavbar from "./component/CrashCourseNavbar"

function App() {
  return (
    <div className="App">
        <Router>
        <CrashCourseNavbar></CrashCourseNavbar>
            <header className="App-header">

                <Routes>
                    <Route path='/buttons' element={<Buttons />}></Route>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='' element={<Home/>}></Route>
                </Routes>
            </header>
        </Router>
    </div>
  );
}

export default App;
