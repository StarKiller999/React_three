import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage.jsx';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

// import { Redirect, Switch } from 'react-router-dom';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }
return (
  //   <Routes>
  //   <Route path="/about" element={<About />}/>
  //   <Route exact path="/posts" element={<Posts />}/>
  //   <Route path="/error" element={<Error />}/>
  //   <Route exact path="/posts/:id" element={<PostIdPage />}/>
  //   <Route path="*" element={<Navigate to="/error" replace />} />

  // </Routes>
  isAuth 
  ?
  <Switch>
    {privateRoutes.map(route => 
      <Route
      component={route.component}
      path={route.path}
      exact={route.exact}
      key={route.path}
      />
    )} 
    <Redirect to="/posts" />
  </Switch>
    :
    <Switch>
     {publicRoutes.map(route => 
      <Route
      component={route.component}
      path={route.path}
      exact={route.exact}
      key={route.path}
      />
    )}
    <Redirect to="/login" />
  </Switch>
 )
}
export default AppRouter;