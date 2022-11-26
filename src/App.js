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

import './App.css';

function App() { 

  return (
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
  )
  }
  
export default App; 


