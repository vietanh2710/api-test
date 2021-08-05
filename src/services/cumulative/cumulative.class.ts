import { Params } from "@feathersjs/feathers";
import { Service, SequelizeServiceOptions } from "feathers-sequelize";
import { Application } from "../../declarations";

export class Cumulative extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  create(data: any, params?: Params) {
    const dataChart = {
      appId: data.appId,
      success: !!data.appId,
    };

    return super.create(dataChart, params);
  }
}
