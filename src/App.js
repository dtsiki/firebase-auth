import React, { useEffect, useMemo, useState } from 'react';
import { Switch } from 'react-router-dom';
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
  const { dispatch } = useStoreon('user');
  const [isInitializing, setInitializing] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const result = await getUserDoc(user.uid);

        if (result) {
          const userObj = {
            isLogin: true,
            displayName: user.displayName,
            email: user.email,
            isAdmin: result.isAdmin,
            userId: user.uid,
          };

          dispatch('user/login', userObj);
          setInitializing(false);
        }
      }
    });
  }, []);

  const routes = [
    { name: 'Main', path: '/', isPrivate: true, component: Main, isExact: true },
    { name: 'Profile', path: '/profile', isPrivate: true, component: Profile },
    { name: 'Sign In', path: '/signin', isPrivate: false, component: SignIn },
    { name: 'Sign Up', path: '/signup', isPrivate: false, component: SignUp },
    { name: 'Secret page', path: '/admin', isPrivate: true, isForbidden: true, component: Admin },
    { name: '404', path: '*', isPrivate: false, component: Error },
  ];

  const renderRoutes = useMemo(() => {
    return routes.map((route) => {
      if (route.isPrivate) {
        return (
          <PrivateRoute
            key={`${route.name}`}
            exact={route.isExact}
            path={route.path}
            component={route.component}
            isForbidden={route.isForbidden}
          />
        );
      } else
        return (
          <PublicRoute key={`${route.name}`} exact={route.isExact} path={route.path} component={route.component} />
        );
    });
  }, [routes]);

  return isInitializing ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <div className="container">
        <Sidebar />
        <main className="content">
          <Switch>{renderRoutes}</Switch>
        </main>
      </div>
      <Notifications />
    </>
  );
};

export default App;
