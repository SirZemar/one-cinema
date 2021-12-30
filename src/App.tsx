import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components 
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Person from './components/Person';
import NotFound from './components/NotFound';
// Context 
import UserProvider from './context';
// Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/actor/:movieTitle/:movieId/:actorId' element={<Person />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
