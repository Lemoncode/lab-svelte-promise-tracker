export const getApiA = async (milis: number = 2000): Promise<string> => {
  const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("*** API B Resolved");
      resolve("*** api-a result");
    }, milis);
  });

  return promise;
};
