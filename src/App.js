import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {GameProvider} from './utils/useGame'
import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import FinalScore from './components/FinalScore';

function App() {
  return (
    <GameProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/game' component={Game} />
          <Route  path='/final-score' component={FinalScore} />
        </Switch>
      </Router>
    </GameProvider>
  );
}

export default App;
