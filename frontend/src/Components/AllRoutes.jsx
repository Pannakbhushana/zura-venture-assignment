import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route  path='' element={<Home/>} />
        <Route  path='' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
