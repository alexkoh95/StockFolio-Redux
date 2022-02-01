import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import PrivateRoute from "./Private-Route";

import EntryPage from "./components/Signup-login/Entry-Page";
import Signin from "./components/Signup-login/Signin";
import Signup from "./components/Signup-login/Signup";
import HomePage from "./components/Navbar/Home-Page";
import StockSearchHome from "./components/Stock-Search/Stock-Search-Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Signout from "./components/Signup-login/Signout";

function App() {
  const state = useSelector((state) => state);

  const userSignedin = state.signin.signedin;

  return (
    <Router>
      <div className="App bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 min-h-screen">
        <main>
          <Routes>
            <Route path="/" exact element={<EntryPage />}></Route>
            <Route path="/signin" exact element={<Signin />}></Route>
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route path="/homepage" exact element={<HomePage />}></Route>
            <Route path="/signout" exact element={<Signout />}></Route>
            <Route exact path="" element={<PrivateRoute />}>
              <Route exact path="stocksearch" element={<StockSearchHome />} />
              <Route exact path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
