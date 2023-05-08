const add = (x, y) => {
  const score = x + y;

  score % 2 === 0 ? evenMsg(score) : oddMasg(score);
};

const evenMsg = (num) => {
  console.log(`Liczba ${num} jest parzysta.`);
};

const oddMasg = (num) => {
  console.log(`Liczba ${num} jest nieparzysta.`);
};

add(10, 11);
