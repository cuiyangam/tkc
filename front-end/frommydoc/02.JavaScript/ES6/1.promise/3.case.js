let Promise = require('./3.promise');

let p = new Promise(
  (resolve, reject) => {
    // resolve("ok");  /**此处为同步的时候，检测不到“循环引用”，所以下个版本在new promise2的时候内部加了setTimeout *//
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  }
);
let promise2 = p.then(
  (value) => { return promise2 },
  (reason) => { console.log("reason", reason); }
);

// promise.then返回一个新的promise
// Promise.reject().then(
//   null,
//   (reason) => {return 100;}
// ).then(
//   (data) => {console.log(data);},
//   (err) => {}
// );