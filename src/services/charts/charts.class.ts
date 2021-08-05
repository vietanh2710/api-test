import { Params } from "@feathersjs/feathers";
import { Service, SequelizeServiceOptions } from "feathers-sequelize";
import { Application } from "../../declarations";

interface DataChart {
  id: number;
  appId: string;
  read: boolean;
  metadata: Record<string, any>[];
}

export class Charts extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  create(data: DataChart, params?: Params) {
    const dataChart = {
      appId: data.appId,
      read: data.read,
      metadata: data.metadata.map((item: Record<string, any>) => {
        const event = new Date();
        const options: any = { dateStyle: "short" };
        const date = event.toLocaleString("en", options);

        return {
          x: date,
          y: item.y,
        };
      }),
    };

    return super.create(dataChart, params);
  }
}
