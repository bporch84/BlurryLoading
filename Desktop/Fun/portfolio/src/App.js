import { Route, Switch, NavLink } from "react-router-dom";

import About from "./components/About";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app-container">
      <nav>
        <h1>Porch's Place</h1>
        <div className="nav-links">
          <NavLink
            exact to="/about"
            activeClassName="active"
            className="nav-link"
          >
            About
          </NavLink>
          <NavLink
            exact to="/projects"
            activeClassName="active"
            className="nav-link"
          >
            Projects
          </NavLink>
          <NavLink
            exact to="/blog"
            activeClassName="active"
            className="nav-link"
          >
            Blog
          </NavLink>
          <NavLink
            exact to="/contacts"
            activeClassName="active"
            className="nav-link"
          >
            Contacts
          </NavLink>
          {/* <NavLink
            exact to="/"
            activeClassName="active"
            className="nav-link"
          >
            Home
          </NavLink> */}
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
