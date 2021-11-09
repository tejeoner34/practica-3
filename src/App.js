import './App.css';
import KanbanPage from './pages/kanban-page';
import Header from './components/header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Header></Header>
      <KanbanPage></KanbanPage>
      </Fragment>
  );
}

export default App;
