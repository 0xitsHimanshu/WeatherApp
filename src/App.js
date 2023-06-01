import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Weather from './Components/Weather';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
   <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={()=><div className='container1'><Weather/></div>} />
          {/* <Redirect from='*' to='/' /> */}
        </Switch>
      </Router>
   </React.Fragment>
  );
}

export default App;