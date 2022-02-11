import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Movie from './components/Movie';
import Person from './components/Person';
import NotFound from './components/NotFound';
// Context 
import UserProvider from './context';
// Styles
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
// Style Config
import { dimensions } from './dimensionsConfig';

const App: React.FC = () => {

  return (
    <Router>
      <ThemeProvider theme={dimensions}>
        <UserProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:movieId' element={<Movie />} />
            <Route path='/actor/:movieTitle/:movieId/:actorId' element={<Person />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
        </UserProvider>
      </ThemeProvider>
    </Router>
  )
};

export default App;
