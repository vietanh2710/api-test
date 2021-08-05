import * as authentication from "@feathersjs/authentication";
import { BadRequest } from "@feathersjs/errors";
import { getData } from "./hooks/validData";
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [getData()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [
      async (context: any) => {
        const { result } = context;

        if (result instanceof Object) return context;

        context.result = result.map((obj: any) => ({
          ...obj,
        }));
        return context;
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
