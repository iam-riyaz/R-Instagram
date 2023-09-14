
import { HomePage } from "./pages/homePage"
import { LoginPage } from "./pages/loginPage"
import { ProfilePage } from "./pages/profilePage"
import { Navigate,Route,Routes } from "react-router-dom"


function App() {
  
  return (
    <div className='app'>

     <Routes>
      <Route path="/" element={LoginPage}>
        <Route path="/home" element={HomePage}> </Route>
        <Route path="/profile/:userId" element={ProfilePage}></Route>

      </Route>
     </Routes>
     

    </div>
  )
}

export default App
