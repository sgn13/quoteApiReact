import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rules from './components/rules';
import Workflow from './components/workflow';
import Discussion from './components/discussion';
import Navigation from './components/navigation'
import { BrowserRouter } from 'react-router-dom';
import PageContent from './components/page-content';
import Home from './components/quotes/home';

function App() {
  return (
    <BrowserRouter>
      <Home />
      {/* <Navigation /> */}
      {/* <PageContent /> */}
    </BrowserRouter>
  );
}

export default App;
