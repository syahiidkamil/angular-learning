const someList = [];

const someFunc = (list) => {
  const listClone = [...list];
  listClone.push("1");
  return listClone;
};

someFunc(someList);

console.log("test", someList);
