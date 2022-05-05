import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layouts from './Layouts';
import Home from '../Home';
import AddNewDeveloper from '../AddNewDevelopers';     
import AllDevelopers from '../AllDevelopers';     
function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route element={<Layouts/>}>
            <Route path="/" element={<Home />} />
            <Route path="/addNewDeveloper" element={<AddNewDeveloper />} />
            <Route path="/allDevelopers" element={<AllDevelopers />} />
            {/* <Route path="/singlesinger/:id" element={<SingleSinger />} />  */}
        </Route>
        </Routes>
  </BrowserRouter>
    </>
  )
}
export default Router