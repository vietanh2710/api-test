// Initializes the `cumulative` service on path `/cumulative`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Cumulative } from './cumulative.class';
import createModel from '../../models/cumulative.model';
import hooks from './cumulative.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'cumulative': Cumulative & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cumulative', new Cumulative(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cumulative');

  service.hooks(hooks);
}
