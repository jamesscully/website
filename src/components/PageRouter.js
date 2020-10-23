import React from 'react'
import {Switch, Route } from 'react-router-dom'

import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";

const PageRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainPage}></Route>
            <Route exact path={'/project/:name'} component={ProjectPage}></Route>
        </Switch>
    )
}
export default PageRouter;
