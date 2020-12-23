import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Discussion from './discussion'
import Rules from './rules'
import Workflow from './workflow'

function PageContent() {
    return (
        <div>
            <Switch>
                <Route path="/rules" component={Rules} />
                <Route path="/workflow" component={Workflow} />
                <Route exact path="/" component={Discussion} />
            </Switch>

        </div>
    )
}

export default PageContent
