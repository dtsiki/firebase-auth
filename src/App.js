import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStoreon } from 'storeon/react';

import Loader from './components/base/Loader';
import { PrivateRoute, PublicRoute } from './components/base/Routes/';
import Nav from './components/common/Nav';
import Notifications from './components/common/Notifications';
import Sidebar from './components/common/Sidebar';
import Admin from './components/pages/Admin';
import Error from './components/pages/Error';
import Main from './components/pages/Main';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import { auth } from './config';
import { getUserDoc } from './controllers/firebase/auth';

const App = () => {
  const { user, dispatch } = useStoreon('user');
  const [isInitializing, setInitializing] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const onAuthStateChanged = (user) => {
    setCurrentUser(user);

    if (isInitializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  useEffect(() => {
    const checkUserRole = async (userId) => {
      const result = await getUserDoc(userId);

      if (result.isAdmin) {
        return true;
      }
      return false;
    };

    if (currentUser) {
      const isUserAdmin = checkUserRole(currentUser.uid);

      const userInfo = {
        isLogin: true,
        displayName: currentUser.displayName,
        email: currentUser.email,
        isAdmin: isUserAdmin ? true : false,
        userId: currentUser.uid,
      };

      dispatch('user/login', userInfo);
    }
  }, [currentUser]);

  return isInitializing ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <div className="container">
        <Sidebar />
        <main className="content">
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/admin" component={Admin} isForbidden />
            <PublicRoute path="/signin" component={SignIn} />
            <PublicRoute path="/signup" component={SignUp} />
            <PublicRoute path="*" component={Error} />
          </Switch>
        </main>
      </div>
      <Notifications />
    </>
  );
};

export default App;
