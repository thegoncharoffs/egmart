import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import './App.scss';

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/main"><Main/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/contacts"><Contacts/></Route>
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
