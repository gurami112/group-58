let isorderSuccessful = true;

let coffeeOrder = new Promise(function(resolve, reject) {
  if (isorderSuccessful) {
    resolve('Your Coffee is Ready');
  } else {
    reject('Your order had been declined');
  }
});

coffeeOrder.then(function(message) {
  console.log(message);
}).catch(function(error) {
  console.log(error);
});






// let hasInternet = true;

// let fileDownload = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     if (hasInternet) {
//       resolve('File Downloaded successfully');
//     } else {
//       reject('Check Your Internet Connection');
//     }
//   }, 2000);
// });

// fileDownload.then(function(message) {
//   console.log(message);
// }).catch(function(error) {
//   console.log(error);
// });
