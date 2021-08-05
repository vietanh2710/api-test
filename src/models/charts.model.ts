// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const charts = sequelizeClient.define(
    "charts",
    {
      appId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      metadata: {
        type: DataTypes.ARRAY(
          (DataTypes.JSON as any)({
            x: {
              type: DataTypes.STRING,
              defaultValue: "",
            },
            y: {
              type: DataTypes.NUMBER,
              defaultValue: 0,
            },
          })
        ),
        allowNull: true,
        defaultValue: [],
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (charts as any).associate = function (models: any): void {
    const { cumulative } = models;
    charts.belongsTo(cumulative, { foreignKey: "appId", as: "chart" });
  };

  return charts;
}
