import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/main'

const Routes=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blog' component={Blog}/>
            <Route path='/blog/:blogPost' component={BlogPost}/>
        </Switch>
    </BrowserRouter>
)