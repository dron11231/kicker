import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Router, Switch, useHistory } from 'react-router-dom';
import { setUserData } from 'redux/reducers/AppSettingsReducer/actions';
import { App, Statistic, Achievements } from 'common';

const AppRoutes = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(setUserData({ isMobile: /Mobi/.test(window.navigator.userAgent) }));
  }, []);

  return (
    <Router history={history}>
      <App />
      <Switch>
        <Route path="/statistic" component={Statistic} />
        <Route path="/achievements" component={Achievements} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
