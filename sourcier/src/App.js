import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import SchoolList from './components/SchoolList';
import SchoolDetails from './components/SchoolDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/schools/:id" component={SchoolDetails} />
        <Route path="/schools">
          <SchoolList />
        </Route>
        <Route exact path="/">
          <Redirect to="/schools" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
