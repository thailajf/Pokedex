import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Pokemon from './Pages/Pokemon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon" exact component={Pokemon} />
    </Switch>
  );
}
