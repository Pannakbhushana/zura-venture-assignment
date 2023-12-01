import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';
import ListingProject from '../Pages/ListingProject';
import SingleProjectPage from '../Pages/SingleProjectPage';
import AccountPage from '../Pages/AccountPage';
import WidgetConfirigation from '../Pages/WidgetConfirigation';
import EditPage from '../Pages/EditPage';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route  path='' element={<Home/>} />
        <Route  path='/listing' element={<ListingProject/>} />
        <Route  path='/account' element={<AccountPage/>} />
        <Route  path='/edit' element={<EditPage/>} />
        <Route  path='/widget' element={<WidgetConfirigation/>} />
        <Route  path='/listing/:id' element={<SingleProjectPage/>} />
        <Route  path='' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
