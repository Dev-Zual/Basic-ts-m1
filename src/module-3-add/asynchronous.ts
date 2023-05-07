// mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else reject("failed to fetched data!");
  });
};

const getData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
