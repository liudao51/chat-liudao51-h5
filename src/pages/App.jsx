import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import routes from './../config/routes';

import '@/theme/default.less';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map((route, key) => {
                            return (
                                <Route path={route.path} component={route.component}
                                       exact={route.exact ? true : false}/>
                            );
                        })
                    }
                    <Redirect to="/error/404"/>
                </Switch>
            </Router>
        );
    }
}

export default App;
