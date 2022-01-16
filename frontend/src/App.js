import "./App.css";
// import ExampleCounter from "./components/example/exampleCounter"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";

import EntryPage from "./components/Signup-login/Entry-Page";
import Signin from "./components/Signup-login/Signin";
import Signup from "./components/Signup-login/Signup";
import HomePage from "./components/Navbar/Home-Page";
import StockSearchHome from "./components/Stock-Search/Stock-Search-Home";

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 min-h-screen">
        <main>
          <Routes>
            <Route path="/" exact element={<EntryPage />}></Route>
            <Route path="/signin" exact element={<Signin />}></Route>
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route path="/homepage" exact element={<HomePage />}></Route>
            <Route
              path="/stocksearch"
              exact
              element={<StockSearchHome />}
            ></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
