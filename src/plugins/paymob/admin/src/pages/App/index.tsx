/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnErrorOccurred } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import SettingsGeneralPage from '../SettingsGeneral';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/settings/${pluginId}/api-tokens`} component={SettingsGeneralPage} exact />
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
