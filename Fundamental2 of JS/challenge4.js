const calcTips = function(biill){
          return biill >= 50 && biill <=300 ? biill*0.15:biill*0.2;
}
const biill = [22,298,176,440,37,105,10,1100,86,52];
const tipss =[];
const total =[];

for(let i = 0 ; i<biill.length; i++){
          const tip = calcTips(biill[i]);
          tipss.push(tip);
          total.push(tip+biill[i]);
}
console.log(biill,tipss,total);

const calcaverage = function(arr){
          let sum =0;
          for(let i=0; i<arr.length ; i++){
                    sum+=arr[i];
          }
          return sum/arr.length;
}

console.log(calcaverage(total));
console.log(calcaverage(tipss));