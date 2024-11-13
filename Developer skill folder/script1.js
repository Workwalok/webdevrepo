// 'use strict';
// const printForecast = function (arr) {
//   return `${arr[0]}C in an 1 days`;
// };
// let arr = [17, 21, 23];
// console.log(printForecast(arr));

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i+1} days...`;
  }
  console.log('...'+str);
};
printForecast(data1);
//printForecast(data2);
