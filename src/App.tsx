import "./App.css"
import { QuestionMapping } from "./features/QuestionMapping/QuestionMapping"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/.auth/login/aad">Login</a>
        <a href="/.auth/logout">Log out</a>
        <QuestionMapping />
      </header>
    </div>
  )
}

export default App
