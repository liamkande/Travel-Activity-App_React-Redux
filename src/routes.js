import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Whoops404 } from './components'
import TravelDayCount from './components/containers/TravelDayCount'
import AddDayForm from './components/containers/AddDayForm'
import TravelDayList from './components/containers/TravelDayList'


const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={TravelDayCount}/>
            <Route path="add-day" component={AddDayForm}/>
            <Route path="list-days" component={TravelDayList}>
                <Route path=":filter" component={TravelDayList}/>
            </Route>
        <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
)

export default routes
