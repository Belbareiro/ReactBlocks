
import React from 'react';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Main from '../Main/Main'
import SubContents from '../SubContents/SubContents'
import Advertisement from '../Advertisement/Advertisement'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="row">
        <Navigation />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
