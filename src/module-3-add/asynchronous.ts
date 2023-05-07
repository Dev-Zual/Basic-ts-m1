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

// boolean promise
const makeBooleanPromise = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else reject("failed to fetched data!");
  });
};

const getData2 = async (): Promise<boolean> => {
  const data = await makeBooleanPromise();
  return data;
};
