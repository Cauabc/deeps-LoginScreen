import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Content from "./components/Content/Content"
import {Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
