const mark = {
          fullname : 'Mark jonas',
          markWeightt : 78,
          markHeightt : 1.69, 
          
          calcBMI : function(){
                     this.markBMI = (this.markWeightt/this.markHeightt**2);
                     return this.markBMI;
          }
}
const john = {
          fullname : 'John jack',
          johnWeightt : 95,
          johnHeightt : 1.88,

          calcBMI : function(){
                     this.johnBMI = (this.johnWeightt/this.johnHeightt**2);
                     return this.johnBMI;
         }
}

const marks= (mark.calcBMI());
const johns =(john.calcBMI());

if(marks > johns){
          console.log(`${mark.fullname} BMI ${marks} is higher than ${john.fullname} BMI ${johns}`);
}
else if (johns > marks){
          console.log(`${john.fullname} BMI ${johns} is higher than ${mark.fullname} BMI ${marks}`);
}
else{
      console.log("Mark's BMI is equal to John's BMI")      ;   
}