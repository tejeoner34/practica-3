import './App.css';
import KanbanPage from './pages/kanban-page';
import Header from './components/header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      {/* aqui va el header */}
      <Header></Header>
      <Switch>

        <Route path="/kanban">

          {/* aqui va la página del kanban */}
          <KanbanPage></KanbanPage>

        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
