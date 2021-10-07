import './App.css';
import Header from './components/layout/header/header';
import Safe from './pages/safe/safe';
import Vault from './pages/vault/vault';
import Azure from './pages/azure/azure';
import Service from './pages/service/service';
import Iam from './pages/iam/iam';
import { Fragment } from 'react/cjs/react.production.min';
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const safeLists = useSelector((state) => state.SafeReducer)
  console.log(safeLists);
  return (
    <Fragment>
      
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact >
            <Safe/>
          </Route>
          <Route path="/vault/:name">
            <Vault/>
          </Route>
          <Route path="/azure">
            <Azure/>
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/iam">
            <Iam/>
          </Route>
        </Switch>
      
    </Router>
      
    </Fragment>
  );
}

export default App;
