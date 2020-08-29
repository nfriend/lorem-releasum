export const timeout = (timeInMs) =>
  new Promise((resolve) => setTimeout(resolve, timeInMs));
