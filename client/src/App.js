import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index-page/IndexPage';
import NotFound from './pages/notfound/NotFound';
import GamesPage from './pages/games-page/GamesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/games">
          <GamesPage />
        </Route>
        <Route exact path="/documentation">
        </Route>
        <Route exact path="/join">
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
