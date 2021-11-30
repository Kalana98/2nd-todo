import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';


function App() {
  return (
    <div>
        <BrowserRouter>

          <div>
            <Link to = "{/login}">Login</Link>
            |
            <Link to = "{/register}"> Register</Link>
          </div>
            <Switch>
              <Route exact path={'/register'}>
               <Register />
              </Route>
            </Switch>
        
          <hr/>
          
        </BrowserRouter>
      </div>
  );
}

export default App;
