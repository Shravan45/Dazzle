import React, { useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Explore from './components/pages/Explore';
import Leagues from './components/pages/Leagues';
import Rankings from './components/pages/Rankings';
import Donate from './components/pages/Donate';
import FeaturedArtists from './components/pages/FeaturedArtists';
import Artist from './components/pages/Artist';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/leagues">
            <Leagues />
          </Route>
          <Route path="/rankings">
            <Rankings />
          </Route>
          <Route path="/featuredArtists">
            <FeaturedArtists />
          </Route>
          <Route path="/artist/1">
            <Artist />
          </Route>
        </Switch>
      )} />
  );
}

export default App;