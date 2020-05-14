import React from "react"
import logo from "./app_logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Profile } from "./features/profile/Profile"
import { Help } from "./features/help/Help"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <sidebar className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-nav">
            <div>
              <ul>
                <li className="App-link">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="App-link">
                  <Link to="/help">Help</Link>
                </li>
              </ul>
            </div>
          </nav>
        </sidebar>
        <main className="App-main">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
