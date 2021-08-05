// Initializes the `charts` service on path `/charts`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Charts } from "./charts.class";
import createModel from "../../models/charts.model";
import hooks from "./charts.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    charts: Charts & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: { default: 100, max: 1000 },
  };

  // Initialize our service with any options it requires
  app.use("/charts", new Charts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("charts");

  service.hooks(hooks);
}
