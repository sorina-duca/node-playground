const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

add(1, 2)
  .then((sum) => {
    return add(sum, 1);
  })
  .then((sum2) => {
    return add(sum2, 1);
  })
  .then((sum3) => {
    console.log(sum3);
  })
  .catch((e) => console.log(e));
