import { BadRequest } from "@feathersjs/errors";

export const getData = () => async (context: any) => {
  const { provider } = context.params;
  if (!provider) return context;

  const appId = context.params.query.appId;
  const read = context.params.query.read;

  if (!appId) throw new Error("AppId invalid");

  const result = await context.app.service("charts").find({
    query: {
      read,
      appId: appId,
    },
  });

  if (!result.total) throw new BadRequest("You do not have permisson to view");

  return context;
};

