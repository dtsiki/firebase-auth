import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './components/pages/Admin';
import Error from './components/pages/Error';
import Main from './components/pages/Main';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

const App = () => {
  const [user, setUser] = useState({
    name: 'Dashich',
    isLogin: true,
    isAdmin: false,
  });

  const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
    return <Route {...rest}>{isLogin ? <Component /> : <SignIn />}</Route>;
  };

  const AdminRoute = ({ component: Component, isAdmin, ...rest }) => {
    return <Route {...rest}>{isAdmin ? <Component /> : <Error message="Access denied" />}</Route>;
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <PrivateRoute path="/profile" isLogin={user.isLogin} component={Profile} />
        <AdminRoute path="/admin" isAdmin={user.isAdmin} component={Admin} />
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
