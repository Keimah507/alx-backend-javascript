function getResponseFromAPI () {
  const i = 5;
  const promise = new Promise((resolve, reject) => {
    if (i === 5) {
      resolve('Successful call');
    } else {
      reject(err);
    }
  });
  promise.then((message) => {
    console.log(message);
  });
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
