import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Teste from './src/components/Teste';

function Routes() {
    return(
        <Switch>
            <Route path="/teste" component={Teste} />
         </Switch>
    );
}

export default Routes;