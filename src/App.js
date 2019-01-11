import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'

import './Utils/icons'

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)
