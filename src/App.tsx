import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/main">null</Route>
          <Route path="/about">null</Route>
          <Route path="/contacts">null</Route>
          <Route path="*">
            <Redirect to="/main"/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
