import React, {useState, useCallback} from "react";
import 
{BrowserRouter as Router,
 Route,
Redirect, 
Switch
} from "react-router-dom"
import Users  from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from "./shared/context/auth-context";
import './App.css';

function App() { 
  const [isLoggedIn, seIsLoggedIn] = useState(false)
  const login = useCallback(() =>{
seIsLoggedIn(true)
  }, [])
  const logout = useCallback(() =>{
seIsLoggedIn(false)
  }, [])
  
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout:logout}}
    > 
   <Router>
    <MainNavigation/>
    <main> 
    <Switch> 

    <Route path="/" exact>
  <Users/>
    </Route>

    <Route exact path="/:userId/places" >
      <UserPlaces/>
      </Route>

      <Route exact path="/places/new" >
      <NewPlace/>
      </Route>

      <Route exact path="/places/:placeId" >
      <UpdatePlace/>
      </Route>

      <Route exact path="/auth" >
      <Auth/>
      </Route>


    <Redirect to="/"/>
    </Switch>
    </main>

   </Router>
   </AuthContext.Provider>
  )
  }
  
export default App; 


