import React from 'react'
import {Route, Switch} from 'react-router-dom'

import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

const PageRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainPage}/>
            <Route exact path={'/project/:name'} component={ProjectPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    )
}
export default PageRouter;
