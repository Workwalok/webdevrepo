/**
 Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. 
 */


// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 95;
// const johnHeight = 1.88;
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;
const markBMI = markWeight/markHeight**2;
const johnBMI = johnWeight/johnHeight**2;
console.log(markBMI);//26.87..
console.log(johnBMI);//27.44..

const markHigherBMI = markBMI > johnBMI;//False because john Bmi is greater than mark
console.log(markHigherBMI);//false