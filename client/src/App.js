import React from 'react';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetails from './Components/BlogDetails/BlogDetails';
import AddBlog from './Components/Admin/AddBlog/AddBlog';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';


export const UserContext = createContext();

const App = () => {

  const [loggedInUsr, setLoggedInUser] = useState({});
  console.log("admin", loggedInUsr);
  return (
    < UserContext.Provider value={[loggedInUsr, setLoggedInUser]}>

      <Router>
        <Switch>

          <PrivateRoute path="/addBlog">
            <AddBlog />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/blog/manage" component={ManageBlog} />
          <Route path="/details/:id" component={BlogDetails} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route patch="*" component={NoMatch} />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;