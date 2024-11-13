const markWeightt = 78;
const markHeightt = 1.69;
const johnWeightt = 95;
const johnHeightt = 1.88;
const markkBMI = markWeightt/markHeightt**2;
const johnnBMI = johnWeightt/johnHeightt**2;

if(markkBMI>johnnBMI){
          console.log(`Mark's BMI ${markkBMI} is higher than John's BMI ${johnnBMI}.`);
}
else{
          console.log(`John's BMI ${johnnBMI} is higher than Mark's BMI ${markkBMI}.`); 
}