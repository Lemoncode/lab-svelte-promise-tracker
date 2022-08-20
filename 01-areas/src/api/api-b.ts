export const getApiB = async (milis: number = 5000): Promise<string> => {
  const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("*** API A Resolved");
      resolve("*** api-b result");
    }, milis);
  });

  return promise;
};
