//generic function

const createArray = <T>(param: T): T[] => {
  return [param];
};

createArray<string>("zual");
createArray<number>(232);
