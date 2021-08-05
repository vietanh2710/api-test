export default () => (context: any) => {
  return {
    ...context,
    data: {
      ...context.data,
    },
  };
};
