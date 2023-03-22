import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Content from "./components/Content/Content"


function App() {
  let Component
  switch (window.location.pathname){
    case '/':
     Component = Content
    break;
    case '/signin':
      Component = SignIn
    break;
    case '/signup':
      Component = SignUp
    break;
  }

  return (
    <>
      <Component/>
    </>
  )
}

export default App
