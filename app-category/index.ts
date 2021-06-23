
import 'module-alias/register';
import * as path from 'path';
import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
  'src': path.resolve(__dirname, 'src'),
  'config': path.resolve(__dirname, 'config'), // set src and config directory as relative passes
});

import container from 'src/container';
import { App } from 'src/application/App';

const app: App = container.resolve('app');
app.start();
