import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"

import Stacks from "./component/Stacks"
import Home from "./component/Home"
import Alerts from "./component/Alerts"
import Buttons from "./component/Buttons"
import Cards from "./component/Cards"
import CrashCourseNavbar from "./component/CrashCourseNavbar"

function App() {
  return (
    <div className="App">
        <Router>
        <CrashCourseNavbar></CrashCourseNavbar>
            <header className="App-header">

                <Routes>
                    <Route path='/buttons' element={<Buttons />}></Route>
                    <Route path='/cards' element={<Cards />}></Route>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/stacks' element={<Stacks />}></Route>
                    <Route path='/alerts' element={<Alerts />}></Route>
                    <Route path='' element={<Home/>}></Route>
                </Routes>
            </header>
        </Router>
    </div>
  );
}

export default App;
